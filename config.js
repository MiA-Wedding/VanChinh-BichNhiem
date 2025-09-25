/* config.js - cấu hình dễ chỉnh
   Nếu anh có iframe embed chính xác từ Google Maps (Share > Embed a map),
   paste src vào mapEmbed. Nếu không, mapEmbed để trống và script sẽ
   hiển thị một bản đồ tìm kiếm bằng mapUrl.
*/
const WEDDING_CONFIG = {
  groomName: "Nguyễn Chính   ",
  brideName: "   Bích Nhiệm",

  weddingDate: "2025-10-19 09:00:00",
  location: "Tại Nhà gái: T.Nghĩa Phong- Thuần Thành - Thái Thuỵ - Thái Bình ",

  // link mở ngoài (mở app Google Maps trên điện thoại)
  mapUrl: "https://www.google.com/maps/place/Th%C3%B4n+Ngh%C4%A9a+Phong,+Th%C3%A1i+Th%C3%A0nh,+Th%C3%A1i+Th%E1%BB%A5y,+Th%C3%A1i+B%C3%ACnh,+Vi%E1%BB%87t+Nam/@20.452885,106.4743945,1205m/data=!3m2!1e3!4b1!4m15!1m8!3m7!1s0x3135f9b0940b5d25:0x82de6c8572848e76!2zVGjDtG4gTmdoxKlhIFBob25nLCBUaMOhaSBUaMOgbmgsIFRow6FpIFRo4buleSwgVGjDoWkgQsOsbmgsIFZp4buHdCBOYW0!3b1!8m2!3d20.4533484!4d106.4766625!16s%2Fg%2F11_sps4wy!3m5!1s0x3135f9b08b0acef1:0x8356548634ef78b6!8m2!3d20.452885!4d106.4769694!16s%2Fg%2F11r85zf_10?entry=ttu&g_ep=EgoyMDI1MDkyMS4wIKXMDSoASAFQAw%3D%3D",

  // link embed hiển thị trực tiếp trong trang
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5247.357863210089!2d106.4743998!3d20.452885!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135f9b08b0acef1%3A0x8356548634ef78b6!2zVGjDtG4gTmdoxKlhIFBob25nLCBUaMOhaSBUaMOgbmgsIFRow6FpIFRo4buleSwgVGjDoWkgQsOsbmgsIFZp4buHdCBOYW0!5e1!3m2!1svi!2s!4v1758736230173!5m2!1svi!2s",


  heroImage: "assets/hero-cover.jpg",
  doorLeft: "assets/A.png",
  doorRight: "assets/B.png",

  music: "assets/Music.mp3",

  effectImage: "assets/effect.png",
  effectEnabled: true,

  videoUrl: "",

  gallery: [
    {src:"assets/g1.jpg"},
    {src:"assets/g2.jpg"},
    {src:"assets/g3.jpg"},
    {src:"assets/g4.jpg"},
    {src:"assets/g5.jpg"},
    {src:"assets/g6.jpg"},
    {src:"assets/g7.jpg"},
    {src:"assets/g8.jpg"},
    {src:"assets/g9.jpg"},
    {src:"assets/g10.jpg"},
	{src:"assets/g11.jpg"},
    {src:"assets/g12.jpg"},
    {src:"assets/g13.jpg"},
    {src:"assets/g14.jpg"},
	{src:"assets/g15.jpg"},
    {src:"assets/g16.jpg"}
  ],

  invitation: {
    groomSide: {
      avatar: "assets/g1.jpg",
      name: "Nguyễn Chính",
      parents: " Địa chỉ: ",
      address: "Thôn Viên Ngoại - Nam Hồng- Tiền Hải - Thái Bình"
    },
    brideSide: {
      avatar: "assets/g2.jpg",
      name: "Bích Nhiệm",
      parents: " Địa chỉ: ",
      address: "Thôn Nghĩa Phong- Thuần Thành - Thái Thuỵ - Thái Bình"
    }
  },

  qr: [
    {src: "assets/QR02.jpg", title: "Nhà Gái - Trần Bích Nhiệm", info: " BIDV Bank: 8832654414 "}
  ],
};
