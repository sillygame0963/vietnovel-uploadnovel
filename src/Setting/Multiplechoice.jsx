import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

export default function Multiplechoice() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "start",
          flexDirection: "column",
          "& > *": {},
        }}
      >
        <ButtonGroup
          variant="outlined"
          aria-label="outlined button group"
          sx={{ textTransform: "uppercase" }}
        >
          <Button sx={{ py: 1.5 }}>
            <a href="/" className="">
              Lưu nháp
            </a>
          </Button>
          <Button>Công khai ngay</Button>
          <Button>Hẹn giờ đăng</Button>
        </ButtonGroup>
      </Box>

      <div className="">
        <div className="italic mt-2">
          Sau khi lưu nháp, bạn có thể điều chỉnh hẹn giờ đăng hoặc yêu cầu trả
          phí sau.
        </div>
      </div>

      <Stack spacing={2} direction="row" mt={4}>
        <Button variant="contained" sx={{ px: 3, py: 1 }}>
          Tiến hành lưu nháp
        </Button>
        <Button variant="text">Bỏ qua</Button>
      </Stack>

      <div className="text-[14px] mt-3 tracking-widest text-gray-500">
        Khi tiến hành tạo truyện nghĩa là bạn đã đồng ý với mọi quy định của
        chúng tôi. Hãy đọc kỹ nội quy để tránh các vi phạm đáng tiếc. Nếu bạn có
        thắc mắc, đừng ngần ngại gửi yêu cầu trợ giúp cho chúng tôi thông qua
        fanpage chính thức của Vietnovel.
      </div>
    </>
  );
}
