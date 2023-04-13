import React from "react";
import NumberPickers from "../Setting/Numberpickers";
import Selectchap from "../Setting/Selectchap";
import Text from "../Setting/Text";
import Content from "../Setting/Content";
import Multiplechoice from "../Setting/Multiplechoice";

export default function Addchapter() {
  return (
    <>
      <div className="h-[80px] bg-[url('https://static.vietnovel.com/img/event_logos/Logo_Noel_2022.png')] bg-no-repeat bg-center -mb-20 "></div>

      <div className="text-left">
        <div className="flex flex-col justify-center items-center mb-10 lg:drop-shadow-xl mt-20">
          <form
            action="/"
            className="w-full md:w-[840px] lg:border lg:border-gray-200 p-6 bg-white mt-[5px] lg:rounded-lg"
          >
            <div className="text-[24px] bold mb-[6px]">Thêm Chương Mới</div>
            <div className="text-[16px]">
              Hãy viết bất cứ thứ gì để ý tưởng của bạn được tự do và sáng tạo
              ra điều tuyệt vời nhất. Tại form này bạn có thể lưu nháp, công
              khai ngay hoặc hẹn giờ đăng tùy ý.
            </div>
            <div className="mt-5">
              <Selectchap />
            </div>
            <div className="mt-10">
              <NumberPickers />

              <Text />
            </div>
            <div className="mt-10">
              {" "}
              <Content />
            </div>
            <div className="mt-8">
              <Multiplechoice />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
