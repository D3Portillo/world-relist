"use client"

import { useAtom } from "jotai"
import { atomWithStorage } from "jotai/utils"

export const MOCK_PRODUDCTS = [
  {
    name: "Vintage Wooden Rocking Chair",
    price: 75,
    image:
      "https://images.squarespace-cdn.com/content/v1/5e8b7eb7480f7807737a7be5/1683899754329-LFVC5DHLB6RQ3E9M7GQO/IMG_9347.jpeg?format=1000w",
  },
  {
    name: "Canon EOS Rebel T6 DSLR Camera",
    price: 300,
    image:
      "https://www.cnet.com/a/img/resize/c1470feea2c7ef3d1b144b606b6229998a273325/hub/2016/05/24/467263d6-ef67-4a6d-b868-7e5549b9c1c4/canon-eos-rebel-t6-13.jpg?auto=webp&fit=crop&height=675&width=1200",
  },
  {
    name: "Apple iPhone 11 Pro Max (256GB)",
    price: 650,
    image:
      "https://di2ponv0v5otw.cloudfront.net/posts/2023/04/16/643c9b7efb7304dc8067efd6/m_643c9b96253a8c6e897dbb63.jpg",
  },
  {
    name: "Samsung Galaxy S22 Ultra 5G (128GB)",
    price: 700,
    image:
      "https://i.ebayimg.com/00/s/MTIwMFgxNTk5/z/-usAAOSwpvhih8yJ/$_57.JPG?set_id=8800005007", // Image from Samsung
  },
  {
    name: "Dell XPS 13 Laptop",
    price: 850,
    image: "https://cdn.mos.cms.futurecdn.net/ApWV3PVJTH8ms2b6afczre.jpg",
  },
  {
    name: "Trek Marlin 5 Mountain Bike",
    price: 400,
    image:
      "https://i.ytimg.com/vi/2S6MAU-yzA8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB_h9xKtljcnmtGyJspJHigL3iRxA",
  },
  {
    name: "Nintendo Switch Console",
    price: 250,
    image: "https://i.ebayimg.com/images/g/MWIAAOSwWxZkrV3-/s-l400.jpg",
  },
  {
    name: "Xbox 360 console used",
    price: 100,
    image: "https://i.ebayimg.com/images/g/IAIAAOSwRjVjkqwy/s-l400.jpg",
  },
  {
    name: "Nokia Lumia 520 - Good condition",
    price: 20,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbjpCSgOzNdlfYewben-ULtihnVsKiFbhkpA&s",
  },
]

const atomProducts = atomWithStorage("ap___products", MOCK_PRODUDCTS)
export const useProducts = () => useAtom(atomProducts)
