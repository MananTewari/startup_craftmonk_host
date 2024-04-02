import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { FetchStatusAction } from "../store/fetchStatus";
import { itemAction } from "../store/itemSlice";


function FetchItemsStatus() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    console.log("fetch called")
    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(FetchStatusAction.markFetchingStarted());

    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(FetchStatusAction.markFetchDone());
        dispatch(FetchStatusAction.markFetchingFinished());
        console.log("items fetched", items);
        // Dispatch action to update Redux state with fetched items
        dispatch(itemAction.addInitialItems(items[0]));
      })
      .catch((error) => {
        if (error.name === 'AbortError') {
          console.log('Fetch aborted');
        } else {
          console.error('Error fetching items:', error);
        }
      });

    return () => {
      console.log("cleanup initiated");
      controller.abort();
    };
  }, [fetchStatus, dispatch]);

  return null; // Or return a placeholder component if needed
}

export default FetchItemsStatus;
