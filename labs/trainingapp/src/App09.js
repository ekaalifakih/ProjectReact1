import React from "react";
import { FormatDate, Message, MessageWithChildren } from "./MyComponentChild";
function App() {
  return (
    <div>
      <FormatDate date={new Date()} />
      <Message text="Pesan telah di submit" important={false} />
      <MessageWithChildren important={false}>
        <b>Form anda telah tersubmit</b>
        <i>Akan segera kita proses</i>
      </MessageWithChildren>
    </div>
  );
}

export default App;
