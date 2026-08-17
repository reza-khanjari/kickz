import CollectionSection from "@/ui/CollectionSection";
import Footer from "@/ui/Footer";
import HeroBanner from "@/ui/HeroBanner";
import VideoPlayer from "@/ui/VideoPlayer";

const kidsSlideImages = [
  {
    src: "https://fzpddpndwwfyjeeydqhn.supabase.co/storage/v1/object/sign/landingPage/kids-101.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xM2EyODU5OS1hYjBhLTQxZDMtOTE1My1mM2Y3MjUzMjI5OWUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsYW5kaW5nUGFnZS9raWRzLTEwMS5wbmciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzg2MzYyOTM3LCJleHAiOjE4MTc4OTg5Mzd9.ZhH1t1gb8hfNis_7FAWq84hh2bM32pOi7g2MOtTE7LQ",
  },
  {
    src: "https://fzpddpndwwfyjeeydqhn.supabase.co/storage/v1/object/sign/landingPage/kids-102.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xM2EyODU5OS1hYjBhLTQxZDMtOTE1My1mM2Y3MjUzMjI5OWUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsYW5kaW5nUGFnZS9raWRzLTEwMi5wbmciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzg2MzYzMDA2LCJleHAiOjE4MTc4OTkwMDZ9.gPZiIYToX5JtIl2VIV1sUz8hhlUuQWsyYEodPTI4154",
  },
  {
    src: "https://fzpddpndwwfyjeeydqhn.supabase.co/storage/v1/object/sign/landingPage/kids-103.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xM2EyODU5OS1hYjBhLTQxZDMtOTE1My1mM2Y3MjUzMjI5OWUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsYW5kaW5nUGFnZS9raWRzLTEwMy5wbmciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzg2MzYzMDIzLCJleHAiOjE4MTc4OTkwMjN9.KR4cEmz6OgVXVf0rO0sQqQiZdKwc0IZJeFS15Rwrxkw",
  },
  {
    src: "https://fzpddpndwwfyjeeydqhn.supabase.co/storage/v1/object/sign/landingPage/kids-104.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xM2EyODU5OS1hYjBhLTQxZDMtOTE1My1mM2Y3MjUzMjI5OWUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsYW5kaW5nUGFnZS9raWRzLTEwNC5wbmciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzg2MzYzMDQxLCJleHAiOjE4MTc4OTkwNDF9.SmBHjWEgdbwsZcqX0q-JY2zxHzhkLcVR21OcwvmKCQE",
  },
  {
    src: "https://fzpddpndwwfyjeeydqhn.supabase.co/storage/v1/object/sign/landingPage/kids-105.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xM2EyODU5OS1hYjBhLTQxZDMtOTE1My1mM2Y3MjUzMjI5OWUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsYW5kaW5nUGFnZS9raWRzLTEwNS5wbmciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzg2MzYzMDU1LCJleHAiOjE4MTc4OTkwNTV9.Gi2ZqTutwap0FbPZi0ljIv8cU_7Ow11ga2CsuMG53PM",
  },
  {
    src: "https://fzpddpndwwfyjeeydqhn.supabase.co/storage/v1/object/sign/landingPage/kids-106.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xM2EyODU5OS1hYjBhLTQxZDMtOTE1My1mM2Y3MjUzMjI5OWUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsYW5kaW5nUGFnZS9raWRzLTEwNi5wbmciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzg2MzYzMDY4LCJleHAiOjE4MTc4OTkwNjh9.igAmp3qLAvhQ_Q1NpCsdzufl2SK3_XH2gHLRcQZDey4",
  },
];
const menSlideImages = [
  {
    src: "https://fzpddpndwwfyjeeydqhn.supabase.co/storage/v1/object/sign/landingPage/man-101.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xM2EyODU5OS1hYjBhLTQxZDMtOTE1My1mM2Y3MjUzMjI5OWUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsYW5kaW5nUGFnZS9tYW4tMTAxLnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODYzNjMwOTIsImV4cCI6MTgxNzg5OTA5Mn0.fqcbWtDeob1_8S9K-ZIw-aSRugUXa-mixvhonf48IhY",
  },
  {
    src: "https://fzpddpndwwfyjeeydqhn.supabase.co/storage/v1/object/sign/landingPage/man-102.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xM2EyODU5OS1hYjBhLTQxZDMtOTE1My1mM2Y3MjUzMjI5OWUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsYW5kaW5nUGFnZS9tYW4tMTAyLnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODYzNjMxMTEsImV4cCI6MTgxNzg5OTExMX0.juAFasFOaaoVS4P6MrqgQBItCMJA1u8b_Ef13LimS40",
  },
  {
    src: "https://fzpddpndwwfyjeeydqhn.supabase.co/storage/v1/object/sign/landingPage/man-103.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xM2EyODU5OS1hYjBhLTQxZDMtOTE1My1mM2Y3MjUzMjI5OWUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsYW5kaW5nUGFnZS9tYW4tMTAzLnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODYzNjMxMjQsImV4cCI6MTgxNzg5OTEyNH0.1LUard_b577KUjce0kkBHavmwLlhgORkbBVWYao73dk",
  },
  {
    src: "https://fzpddpndwwfyjeeydqhn.supabase.co/storage/v1/object/sign/landingPage/man-104.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xM2EyODU5OS1hYjBhLTQxZDMtOTE1My1mM2Y3MjUzMjI5OWUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsYW5kaW5nUGFnZS9tYW4tMTA0LnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODYzNjMxMzcsImV4cCI6MTgxNzg5OTEzN30.IuCvC5P10G1wzHYqn-yXZR55bB8c7qBP8yKEsOpGMeE",
  },
  {
    src: "https://fzpddpndwwfyjeeydqhn.supabase.co/storage/v1/object/sign/landingPage/man-106.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xM2EyODU5OS1hYjBhLTQxZDMtOTE1My1mM2Y3MjUzMjI5OWUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsYW5kaW5nUGFnZS9tYW4tMTA2LnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODYzNjMxOTIsImV4cCI6MTgxNzg5OTE5Mn0.kYxY0x-BLG9B_hsNIAEZ7d_n4DGC4_OBtISJjU0skYo",
  },
  {
    src: "https://fzpddpndwwfyjeeydqhn.supabase.co/storage/v1/object/sign/landingPage/man-107.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xM2EyODU5OS1hYjBhLTQxZDMtOTE1My1mM2Y3MjUzMjI5OWUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsYW5kaW5nUGFnZS9tYW4tMTA3LnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODYzNjMyMDUsImV4cCI6MTgxNzg5OTIwNX0.8ytjH9jZWxKf4DVdxl95YaXI93Kw12FhVZ5Jsh-53G4",
  },
];
const sportsSlideImages = [
  {
    src: "https://fzpddpndwwfyjeeydqhn.supabase.co/storage/v1/object/sign/landingPage/sports-109.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xM2EyODU5OS1hYjBhLTQxZDMtOTE1My1mM2Y3MjUzMjI5OWUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsYW5kaW5nUGFnZS9zcG9ydHMtMTA5LnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODYzNjM3OTQsImV4cCI6MTgxNzg5OTc5NH0.Fjs13VOCK0N3faf99VMkLzSeHShPd852I9Pzk7DLAE8",
  },

  {
    src: "https://fzpddpndwwfyjeeydqhn.supabase.co/storage/v1/object/sign/landingPage/sports-103.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xM2EyODU5OS1hYjBhLTQxZDMtOTE1My1mM2Y3MjUzMjI5OWUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsYW5kaW5nUGFnZS9zcG9ydHMtMTAzLnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODYzNjMyNzYsImV4cCI6MTgxNzg5OTI3Nn0.Wl4gJBPYky7q1-5h2O9vKFQ1kApsY-Nk1RJqOixBH7A",
  },
  {
    src: "https://fzpddpndwwfyjeeydqhn.supabase.co/storage/v1/object/sign/landingPage/sports-108.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xM2EyODU5OS1hYjBhLTQxZDMtOTE1My1mM2Y3MjUzMjI5OWUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsYW5kaW5nUGFnZS9zcG9ydHMtMTA4LnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODYzNjMzNDIsImV4cCI6MTgxNzg5OTM0Mn0.spw2mZi9lKVP3H8tpAzZVnrxhzmvRcnUA2ZzlNooHvk",
  },
  {
    src: "https://fzpddpndwwfyjeeydqhn.supabase.co/storage/v1/object/sign/landingPage/sports-102.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xM2EyODU5OS1hYjBhLTQxZDMtOTE1My1mM2Y3MjUzMjI5OWUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsYW5kaW5nUGFnZS9zcG9ydHMtMTAyLnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODYzNjM5ODcsImV4cCI6MTgxNzg5OTk4N30.AgEJ5-BUXsnt17wgPSZO5Mga_FnvwcLg-pdtr0BdTbM",
  },
  {
    src: "https://fzpddpndwwfyjeeydqhn.supabase.co/storage/v1/object/sign/landingPage/sports-104.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xM2EyODU5OS1hYjBhLTQxZDMtOTE1My1mM2Y3MjUzMjI5OWUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsYW5kaW5nUGFnZS9zcG9ydHMtMTA0LnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODYzNjMzMDAsImV4cCI6MTgxNzg5OTMwMH0.CmirFOyoMlsrJX4BgcxkFJznZD08hg7tPIEtv-GLT74",
  },
  {
    src: "https://fzpddpndwwfyjeeydqhn.supabase.co/storage/v1/object/sign/landingPage/sports-106.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xM2EyODU5OS1hYjBhLTQxZDMtOTE1My1mM2Y3MjUzMjI5OWUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsYW5kaW5nUGFnZS9zcG9ydHMtMTA2LnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODYzNjMzMTgsImV4cCI6MTgxNzg5OTMxOH0.MZGy0TvHB7rgYZP0n61_xNdb1JCuRNTBP-72qPvt9_I",
  },
  {
    src: "https://fzpddpndwwfyjeeydqhn.supabase.co/storage/v1/object/sign/landingPage/sports-107.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xM2EyODU5OS1hYjBhLTQxZDMtOTE1My1mM2Y3MjUzMjI5OWUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsYW5kaW5nUGFnZS9zcG9ydHMtMTA3LnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODYzNjMzMzAsImV4cCI6MTgxNzg5OTMzMH0.XtFmelMuoiyoJmJU3vYKN31VvwBW7MBvPz4fIKF4Q4w",
  },
];
const womenSlideImages = [
  {
    src: "https://fzpddpndwwfyjeeydqhn.supabase.co/storage/v1/object/sign/landingPage/woman-101.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xM2EyODU5OS1hYjBhLTQxZDMtOTE1My1mM2Y3MjUzMjI5OWUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsYW5kaW5nUGFnZS93b21hbi0xMDEucG5nIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4NjM2NDA2OCwiZXhwIjoxODE3OTAwMDY4fQ.fp9smP0FXqQOekNgEkiZK_oO5VrMBK9Lsud6zlI2aDg",
  },
  {
    src: "https://fzpddpndwwfyjeeydqhn.supabase.co/storage/v1/object/sign/landingPage/woman-102.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xM2EyODU5OS1hYjBhLTQxZDMtOTE1My1mM2Y3MjUzMjI5OWUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsYW5kaW5nUGFnZS93b21hbi0xMDIucG5nIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4NjM2MzQwMiwiZXhwIjoxODE3ODk5NDAyfQ.Z0t0t84YtsEtObd_rCtsgScQUWPq7SMptJqJdh2ls38",
  },
  {
    src: "https://fzpddpndwwfyjeeydqhn.supabase.co/storage/v1/object/sign/landingPage/woman-103.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xM2EyODU5OS1hYjBhLTQxZDMtOTE1My1mM2Y3MjUzMjI5OWUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsYW5kaW5nUGFnZS93b21hbi0xMDMucG5nIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4NjM2MzQ2NSwiZXhwIjoxODE3ODk5NDY1fQ.wLGsoAKCXx78g2TD8170ysy_sGYTmHZquLWhgEcPC8k",
  },
  {
    src: "https://fzpddpndwwfyjeeydqhn.supabase.co/storage/v1/object/sign/landingPage/woman-104.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xM2EyODU5OS1hYjBhLTQxZDMtOTE1My1mM2Y3MjUzMjI5OWUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsYW5kaW5nUGFnZS93b21hbi0xMDQucG5nIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4NjM2MzQyMywiZXhwIjoxODE3ODk5NDIzfQ.dR3AHDvE9MM87tEBYhggdMOvbEUnQF6UPURjVMtYAu8",
  },
  {
    src: "https://fzpddpndwwfyjeeydqhn.supabase.co/storage/v1/object/sign/landingPage/woman-105.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xM2EyODU5OS1hYjBhLTQxZDMtOTE1My1mM2Y3MjUzMjI5OWUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsYW5kaW5nUGFnZS93b21hbi0xMDUucG5nIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4NjM2MzQzNSwiZXhwIjoxODE3ODk5NDM1fQ.DZnN9UBDqpMExCIaB5SbH3SWGZfagiIE_Tgb4sJcf3c",
  },
  {
    src: "https://fzpddpndwwfyjeeydqhn.supabase.co/storage/v1/object/sign/landingPage/woman-106.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xM2EyODU5OS1hYjBhLTQxZDMtOTE1My1mM2Y3MjUzMjI5OWUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsYW5kaW5nUGFnZS93b21hbi0xMDYucG5nIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4NjM2MzQ0NCwiZXhwIjoxODE3ODk5NDQ0fQ.Yx1EDaQQuSCMBJ5BFH1LRyLyXXcn32jzD7adku80WnY",
  },
];
const firstSlideImages = [
  {
    src: "https://fzpddpndwwfyjeeydqhn.supabase.co/storage/v1/object/sign/landingPage/man-105.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xM2EyODU5OS1hYjBhLTQxZDMtOTE1My1mM2Y3MjUzMjI5OWUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsYW5kaW5nUGFnZS9tYW4tMTA1LnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODYzNjM4MzAsImV4cCI6MTgxNzg5OTgzMH0.e4PlUrVKmQ_6V1O1a4S-NLWvYYxvKbagFScIpAzkWr8",
  },
  {
    src: "https://fzpddpndwwfyjeeydqhn.supabase.co/storage/v1/object/sign/landingPage/kids-107.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xM2EyODU5OS1hYjBhLTQxZDMtOTE1My1mM2Y3MjUzMjI5OWUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsYW5kaW5nUGFnZS9raWRzLTEwNy5wbmciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzg2MzYzODk4LCJleHAiOjE4MTc4OTk4OTh9.UFqL7PsrzAcsQ0GUUOQScSBDGaEURPfR3gY7LSGmK8c",
  },
  {
    src: "https://fzpddpndwwfyjeeydqhn.supabase.co/storage/v1/object/sign/landingPage/sports-101.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xM2EyODU5OS1hYjBhLTQxZDMtOTE1My1mM2Y3MjUzMjI5OWUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsYW5kaW5nUGFnZS9zcG9ydHMtMTAxLnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODYzNjMyNDgsImV4cCI6MTgxNzg5OTI0OH0.AxzTdfgUdZQ-Zdho_HJ54laIu8zh6DKWaWwfsL31x7U",
  },
  {
    src: "https://fzpddpndwwfyjeeydqhn.supabase.co/storage/v1/object/sign/landingPage/shoes-101.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xM2EyODU5OS1hYjBhLTQxZDMtOTE1My1mM2Y3MjUzMjI5OWUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsYW5kaW5nUGFnZS9zaG9lcy0xMDEucG5nIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4NjM2MzY1NiwiZXhwIjoxODE3ODk5NjU2fQ.rzLFrScM_NIPSTojZtJ8GFlPhb1C7JVd2IdadFecPco",
  },
  {
    src: "https://fzpddpndwwfyjeeydqhn.supabase.co/storage/v1/object/sign/landingPage/woman-107.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xM2EyODU5OS1hYjBhLTQxZDMtOTE1My1mM2Y3MjUzMjI5OWUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsYW5kaW5nUGFnZS93b21hbi0xMDcucG5nIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4NjM2MzYyNywiZXhwIjoxODE3ODk5NjI3fQ.QpqbTMDkuZee3muiuWCFbYNPIP2hjTeTFlX-gAvk5NQ",
  },
  {
    src: "https://fzpddpndwwfyjeeydqhn.supabase.co/storage/v1/object/sign/landingPage/woman-108.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xM2EyODU5OS1hYjBhLTQxZDMtOTE1My1mM2Y3MjUzMjI5OWUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsYW5kaW5nUGFnZS93b21hbi0xMDgucG5nIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4NjM2MzYwNCwiZXhwIjoxODE3ODk5NjA0fQ.oORqgyZyepkLNb_A4tOTPA9HYuwPsolXYNH_3JBQg5A",
  },
  {
    src: "https://fzpddpndwwfyjeeydqhn.supabase.co/storage/v1/object/sign/landingPage/sports-105.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xM2EyODU5OS1hYjBhLTQxZDMtOTE1My1mM2Y3MjUzMjI5OWUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsYW5kaW5nUGFnZS9zcG9ydHMtMTA1LnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODYzNjM3NjEsImV4cCI6MTgxNzg5OTc2MX0.sIz2YiiV8_qqgiF1iaXGt1KK0p072E0ZS11d8onVmtY",
  },
];
function Home() {
  return (
    <section className="text-white">
      <div className="h-dvh bg-black [background-image:var(--bg-101-sm)] bg-cover md:bg-fixed bg-no-repeat md:[background-image:var(--bg-101-lg)]"></div>
      <VideoPlayer src="https://fzpddpndwwfyjeeydqhn.supabase.co/storage/v1/object/sign/video/run.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xM2EyODU5OS1hYjBhLTQxZDMtOTE1My1mM2Y3MjUzMjI5OWUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlby9ydW4ubXA0Iiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4NjA5NTY1NCwiZXhwIjoxODE3NjMxNjU0fQ.e4QnrpfVBuSvvoJpPBlxUzSAs97rwDMG30MYFyXLz-Y" />

      <CollectionSection title="For everyone" images={firstSlideImages} />
      <HeroBanner
        imgUrl="https://fzpddpndwwfyjeeydqhn.supabase.co/storage/v1/object/sign/landingPage/man-108.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xM2EyODU5OS1hYjBhLTQxZDMtOTE1My1mM2Y3MjUzMjI5OWUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsYW5kaW5nUGFnZS9tYW4tMTA4LnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODYxNzgxMTMsImV4cCI6MTgxNzcxNDExM30.xGZ72bqmboDqLacJJVCYNcwG8nduxWTvFLPQToUA61k"
        imgAlt="men-shoes"
        desc=" Classic comfort and polished design for every special occasion."
        btnLabel="expolre"
        title="Sharp Style, Confident Steps"
      />
      <CollectionSection title="sharp & confident" images={menSlideImages} />

      <HeroBanner
        imgUrl="https://fzpddpndwwfyjeeydqhn.supabase.co/storage/v1/object/sign/landingPage/sports-110.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xM2EyODU5OS1hYjBhLTQxZDMtOTE1My1mM2Y3MjUzMjI5OWUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsYW5kaW5nUGFnZS9zcG9ydHMtMTEwLnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODYxNzgxOTMsImV4cCI6MTgxNzcxNDE5M30.ySQPZJAXYLn_jdPJxvJldWq0XTjIsCLd8CIDk245vIQ"
        imgAlt="sports-shoes"
        desc="Built for winners. Ready for the finish line.."
        btnLabel="expolre"
        title="road to championship"
      />
      <CollectionSection title="for champions" images={sportsSlideImages} />

      <HeroBanner
        imgUrl="https://fzpddpndwwfyjeeydqhn.supabase.co/storage/v1/object/sign/landingPage/woman-109.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xM2EyODU5OS1hYjBhLTQxZDMtOTE1My1mM2Y3MjUzMjI5OWUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsYW5kaW5nUGFnZS93b21hbi0xMDkucG5nIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4NjE3ODI1NCwiZXhwIjoxODE3NzE0MjU0fQ.IGuVLfmyMff0_LT-WvwOkIkbdP8sE_8bd1ehOw5vQ5U"
        imgAlt="women-shoes"
        desc="Step into elegance with all-day comfort designed for every moment."
        btnLabel="shop"
        title="Beauty Meets Comfort"
      />
      <CollectionSection title="beauty & comfort" images={womenSlideImages} />

      <HeroBanner
        imgUrl="https://fzpddpndwwfyjeeydqhn.supabase.co/storage/v1/object/sign/landingPage/kids-108.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xM2EyODU5OS1hYjBhLTQxZDMtOTE1My1mM2Y3MjUzMjI5OWUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsYW5kaW5nUGFnZS9raWRzLTEwOC5wbmciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzg2MTc4MzAxLCJleHAiOjE4MTc3MTQzMDF9.i36xVnvjeeIMsTe6wcbzr6e2zBNZ-R-SVuJV9wysNS4"
        imgAlt="kids-shoes"
        desc="Bright, comfy shoes for little feet to run, laugh, and play all day."
        btnLabel="shop"
        title="Made for Play, Filled with Joy"
      />

      <CollectionSection title="play & joy" images={kidsSlideImages} />

      <Footer />
    </section>
  );
}

export default Home;
