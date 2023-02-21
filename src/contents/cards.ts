
import { BsSoundwave } from "react-icons/bs"
import { TbMessage2 } from "react-icons/tb";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { IoLogoWhatsapp, IoCheckmarkCircleOutline } from "react-icons/io5";

export const items = [
  { 
    title: "SMS",
    Icon: TbMessage2,
    hasLink: true,
    data: [
      {
        name: "To Send SMS",
        value: (Math.random() * 8).toFixed(4) + "/sms"
      },
      {
        name: "To Receive SMS",
        value: (Math.random() * 8).toFixed(4) + "/sms"
      },
    ]
  },
  { 
    title: "Voice",
    Icon: BsSoundwave,
    hasLink: false,
    data: [
      {
        name: "To make Calls",
        value: (Math.random() * 8).toFixed(4) + "/sec"
      },
      {
        name: "To Receive Calls",
        value:  "coming soon"
      },
    ]
  },
  { 
    title: "Email",
    Icon: HiOutlineEnvelope,
    hasLink: false,
    data: [
      {
        name: "Price Per Mail",
        value: (Math.random() * 8).toFixed(4) + "/email"
      },
    ]
  },
  { 
    title: "Whatsapp",
    Icon: IoLogoWhatsapp,
    hasLink: true,
    data: [
      {
        name: "To Send Message",
        value: (Math.random() * 8).toFixed(4) + "/msg"
      },
      {
        name: "To Receive Message",
        value: (Math.random() * 8).toFixed(4) + "/msg"
      },
    ]
  },
  { 
    title: "Verification",
    hasLink: false,
    Icon: IoCheckmarkCircleOutline,
    data: [
      {
        name: "To Send OTP",
        value: (Math.random() * 8).toFixed(4) + "/OTP"
      },
      {
        name: "To Confirm OTP",
        value: "coming soon"
      },
    ]
  },
]