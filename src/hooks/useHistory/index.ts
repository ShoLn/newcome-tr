import { useQuery } from "react-query";
import { historyFetcher } from "./api";

//Type
import { UseHistoryType, HistoryFetcherType } from "./type";
/*
  React Query 簡介：
  我們在每個頁面通常都需要先串接一些資料再顯示UI，並需要額外處理它的 isLoading 或 isError 等狀態，深入一點 還要知道它什麼時候需要重新串接 
  以及 它的快取處理用以避免重複串接及提升效能。
  如果這些都需要我們自己手刻處理將要花費許多時間並且可能會有許多沒處理好的部分，這時候我們就能選用 React Query ，
  只要一些簡單的設置，就能幫我們處理好上述的所有狀況，省時省力又有效減少程式碼。
  類似的套件還有 SWR、RTK-Query、Apollo Client 可依照專案狀況選用。
*/

// 0 ) 回到 ./App.tsx 看 QueryProvider 的套用。

// 1 ) https://react-query-v3.tanstack.com/quick-start
// 先看 Quick Start 範例， 理解套件的最基礎架構。

// 2 ) https://react-query-v3.tanstack.com/guides/query-keys
// 了解傳給 useQuery hook 的第一個參數(keys)為其分辨是否重新串接資料的指標，並可傳入字串或是陣列
// (陣列中可以為字串或可序列化物件serializable objects)。

// 3 ) https://react-query-v3.tanstack.com/reference/useQuery
// 了解 useQuery hook 還能傳入第二及第三個參數，第二個為串接資料的函式 已經先幫你寫好(historyFetcher)，
// 第三個為 configuration object 可直接複製 { enabled: Boolean(token), onError: (err) => { console.log(err.message) }, }。

// 4 ) 請依據 historyFetcher 推敲完成下面的串接資料用的 hook。
export const useHistory:UseHistoryType = (params, token) => {
  // return useQuery(...)
  return useQuery(["newcomeTr", params, token], historyFetcher, {
    enabled: Boolean(token),
    onError: (err) => {
      console.log(err.message);
    },
  });
};

// 5 ) 最後試著閱讀同資料夾中的 type.ts 檔案，了解 UseHistoryType 及 HistoryFetcherType 的結構，將此檔案從.js改成.ts。
