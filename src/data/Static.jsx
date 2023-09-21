import html from "../assets/langues/HTML.png";
 import reactLangue from "../assets/langues/react.png";
import django from "../assets/langues/django.png";
 import css from "../assets/langues/css.png";
import github from "../assets/langues/github1.png";
import tailwind from "../assets/langues/tailwind.png";
import firebase from "../assets/langues/firebase.png";
// import firebase from "../assets/langues/firebase.png";
import redux from "../assets/langues/redux.png";
import mongodb from "../assets/langues/mongodb.png";
import mui from "../assets/langues/mui.png";
import js from "../assets/langues/js.png";
 import bootstrap from "../assets/langues/bootstrap.png";
//  import Yllimg from '../assets/yllimg.jpg'

// Array of work objects
export const works = [
  {
    title: "Your Land Loans",
    imgUrl:
      "",
    tech: ["javaScript", "React js", "HTML", "CSS", "Bootstrap 5", "Firebase",  "Formik"],
    LiveDemoUrl:
      "https://yourlandloans.com/",
    duration: "400",
    // GithubUrl:
    //   " ",
    duration: "400",
  },

  {
    title: "Award Management System",
    imgUrl:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA81BMVEX///8Acb3///3//v8Acb7+//sAbrwAcrwAab0Aa7gAZLLp9Pj8//+qy95Pj8QAbrqZvdiw0uJgnMgAa7z///iDttiLuNbE3OgAarsAccMAcrkAZbb3//8YdLAAbsEAaLQAZq3M5u8AZbsAYLAAarD19fjv/f8AYbV1p8oAa8IAa6whfcAAYq262OVxpsnW6/Egf74sea+ayOBIiLxknce31OeQuNXh9/o9iMO92etTkr59sdGoyOG73ugpgLLY7fhnosRWlb7N3+ZRlMWTutjo/v2AtMxAhbIqis0sidAVg84AYaIigsH18OoAa6dpo86/0NkFTd6NAAAUYUlEQVR4nO1cC1vaSrdOJnOBEAyQKSSTkHAzIkHCRcWKl3bT2+m22/P/f81ZK1i1Fdv97f31IfbkbR9ra+gzb9Z9zazRtAIFChQoUKBAgQIFChQoUKBAgQIFChQoUKBAgQIFChQoUKBAgQIFChQoUKBAgQIFCvwiEELgq2UZu17ILwPRiEEYI78vQ0YsQizrN2ZoERYwaWhk1wv5ZWDa5Wydar8fQwmKqVkBIel6LLi5qkjG2K4X9V+FxQhhRIs/dBxacjxnVAXS5HcSJHgXYgT1UUm4g/kwsql51iXM2vWy/osgltS6Vz3KD4bvJekuerTcayx3var/EkhmgtryuC+Uv5cyA3ypdtJ2RHn8LiABefleB+IDIUGzc8jd5EiCRVoBs6zgtBPqpqqivwEV3vUi/xXAArV6u6xcswZkGYhv0SUShWoq1Vt04YEX7lYNrbvwOR8fV0BWEkzQc/qTpZSEdM8iyvu3S3wHLxnxxOfCvOoyZrH3E3CjVFBbgTxBoFXlerxcC14kQwvMyzBIUBtzz1H1LF2bR46uU6rDF7/9mkmiBa8ix/andYnZACMvKkKyLMc+mpoe77yKMby/nvY4srtDtJfCEyxd+6Hjnqfocq0X5VaZZUCKZnp6p7EEaWrpeZ8q9Yih7Y1XsQwsrTU9FJ45jFGmL4khIfHQDFU0bVngON+vxqHQw1A9MNSVfqiq8EMwx4HLw0E1eBFhA2xPMwyLyaD616Ed2lWIfyy4GHHKdV0IHdwMFbqgQijq6bZ/c6mB/cHLcMPStAXlIwRM/JpnGESTxLq8KtkDfxVjzn05Mx+0EzRVgKfJvqdKeJ1GijV/uj4IvfH5NabjFih4fiMkWBxo2vLtGCIEuBJI0JYN/5GDoRAphM1BmhmE7pWj0wCCvnaUlPSy/yHAPoCWY4bw+mW8irjnTiEcgP6tTOeR7VHRThAiM0jQWKWEOBzVwRwhsEAiVwLTJJLluFMFFjQflanbmUP2ybQLVaIe2N5XhnwBIrbI+4634QscKShuBMkbiG75pl/mpbOulse6CgICw5AGqViJe+akAopHulf+g9HpYIDchNiObmRYvpfq5uv4TQU+oKULMwz7xxVJGLirXZN6DGtTJMllY0y5/7EL3oIsG33bEw/xAWzPa4M6GgZj6SPfkwlTcb+G5hjU267OB03QACNXmopOHtKyZscWblIHR4Hfd1ADdfpAg7pzpA7ukqz5Y4ZCQfwoteugqRI+KDjkeSRnFQcIEV+/cKJmQKQGNVKU+ZFvJOX9FUOpgVZGWv5jIYosSvLS+ppYBiiCyQ97591dc7oHwRLWwhqJcvN4iSK6PgctFJhk4x938MRhk2T90sCwtDMu6P2PMn42JD3mKjPgy7NIhf1JzLIWlrZrdYUEhsnKxIciYXEJXGU8MW31jZ1t/Kgwl8wg5LTLYMl1H1TzyTPUHdQCw5DBfBQpZ1CzpGHtPpcj4BVqg7Jy1AVGQFgc90Ajn6xeld5ATscCu6EFUFa1bX0LQ6H3kiONBRBIx1zZyeuNC9stmDxqlzwerd5DiaedTCNhQwx8snhdmCkUhEbdH1eIYcla2dvCEJwv7+2lEiPHW5Pb5jplO2eYrnuc998useWbrjuc0lDQLfLh5xDrJTnjpQ9YD8eR2iJnwUGMtLcK4MWRo5mvc3MV75AhMUhldeBQc3qJThBSNP5k0Rv5hbrwWyAN1u1D8Is1qKhW/JmHQZTOAJI3g2nzQdmLRheBsStBWrJlh547mkOo1qyqKtnPrVn3wiuo/whpOIKac0y1l9EWVb5/JVlTPGCV4Ziq3qwid+RtGJmbajCMCWhf66rnCfHcohXtVZFWGlFwszcYYGTDeeZhlKLi/eMllGEyXTvKr+wsYpCq6TRxU8L60D+EBGabh9nIhI4C7BquSpjHjVuQr7Cu+TxDnXLqjo+YZljWgncqu+pvEFI9jGq4OU+sKmQ0AoLEliiHInFO0e8HHQ/rfL4HhbJFFqHwttkiJLCezntn11rW9d+zo8quunBMq5bKNWw9wHqDVRQKDi9fbVv0IIZH5LwsELSTotod+YpueR/cg6IRC0V8hyDsPW5WyI72xe8YgvZh8xBKe1MXnG/RVHU4xOw8bvuAyPT7E/i0YU2p2MIQ0lluNgPsQFpYKe6eoWbsg41J7Ha2znzQvC0i9K8hspC4hejCrz+QIblwt9qtfQDRFVNYcNH5YMjq58u7DlJwARHsiVB0vsb+MJFZW5tBNEfZGFrc3qKlNJq1sOWPD3ZnyzwwJKTeg6KJYZsN26SRt2lQbPIa8J2URrhtgW37h49mLcOmS++lKCDbgzrRVRcW/MfY5F++6ft5YejrbnICRgO/iUzPfVvp6mvxCzkMXVhW1ifM3C5CwyM1hCw7D2oqMNbw8TAG5cRyLDiNygLiRD4YHkIEOPjYZVn9R7Sjmet5dwoI7pL2joA8CQJIfL4isLJDNW8eoj68iNA8T3HDkUGWVh+VbBB+XhhGWMPapVvIQgyoGwiUUwMo8bOFU+G1A/S380H7AWqQos5CmvqgpdHsNZEWVIQabvVDUZwjhj6W6VQ4gzmIycC6YDkZe5CgKQXBuzTPdrpnoeIPcCboXa31gGI9IYQKo3kASiDBIS0nfS7QjEWUHzu884P+9ESio4cFdT8eQOimkOSM3mM+U48e+02PdpbYH7j0bTRAj5uTpYY9KngV7zr2xklxPUcyvHcX/hpNCWopadXbPcyzw5WFsW3hPS4IPQEJLfZEp+BBPTHeg1LC0LI9x5nDN4WV4CJ/DMG/oDuUuN0J8a4ZOWBe77EveOln2033UHwU4/9R56EwkzoeDDMIk+meCZLfZPC5ZMjB7JSjoGCEJRkQ0o77XF+f7+0tEgqmep9nU4yYi/Xe+d5alPunMducyIyHfgge6uu+TR4Z3kXA0qwFEskCH57EUDoPvae1I7ftMLSjN8vNroAM5h1M4x68a24Zgi5yHyIbRA1QvKA6KinKt3RuUJK9q0vGGJ5dJK1p6duXkF+GWAFSKA9icB4YJ+IPY3D+T5NsSqFG0pgVyICw9K3PxUthGHrZ/m5pVLWw/rGklq7Npy0cWh6vYrZpmuOeI/3+HeSXISbQHFMA3BdkGBOIbM1wp0KI7EdYFQpuNq6xXQM5jAWKnP30pTC8h1c2jytgZlh0BLWBi2EAE/FQKF6aXuKOIUMDhNxAbOkMvACGglInOsV820BzHEIu5nHck9LdwRw7H+Bv2fXk5tOn9rbOwAtgqISyPbd9FGT5CsmOEHHu6aE7WWLFjF3k0xulEnW2rZ2RO4ZbnCWkz1AK+9l5y6wvcdR2OYfEDrcA8NBFva3+p/1p+qmdiLsjb3lmiAUCpCPfGRQKh4/xjCU2qzSrOZgeZadOQXO7i4gnN8lIJe1E4aEFkfUEcstQ97j6DCS/69NAre+FkapB1a5pgbQqECaRq4xvxyEX7U/qJpnOpvgpTOweaWvuGMLakrZ6su1EMTyEYTQ7IuBWAwPPBONBRNxzFJ6yb85U8ikpO04UlRxbPPp47hh65bEa2L5JN/Z0Z1VCRb7fMw+4MN9eo+0ZhoY1UtKzp5+58ugg+Sw669XFSfVitR743sNnc8UQJGeLYfrHH3+k9fHnBI8BJwk4UkhHB/NumqbLiZ2IPz9UMEAQeb22k/ZoisejlH5wfgL6K5mUhMVH5z4UINNE5Y2hpw8+D5psf39fC151bkY0SQZqqkI7SSbgUiBWvFMKrPSvy31IYprjz2qUDBJbjeCPKjMM8mV/AxnUI5EoEKydL4ZUT4RAhozsxx8/Y4ibJtENV9PZEhevydMBkE5Une0H2loJlF6STD8n0y58KtjfJ/CbwaNfWDqDR0cJVP40PwxdYYO7b2qwQFjsdcRvRhkDPfmrRQJYtyFPQS4qiarGF0YawBX90nTAxydsX+5DbVipVGJmAFvIYdsQPBKQYI5kGAHDxH+l7cMKv+yTan+q0Ma4rWpfAtRdQzYFVcm0fEH2mdZAAlRME9s+B/e6vx/Pr2YHg9m6Cm/DYGz1+S8w4lxpqasLCBQrEAcsFzT1mKIbCXW7Eexb1j78YisVAmvzgu0b2ltQQvBNoIt2le0zVmkLlVBQ7YOrdF+mk6Q9tamwIX/ID0OQz0g0wZaMLwEoXTADVwNW1q7soxUCK7ZK9PaGIZG3YKbgfJPRJ/WakS9BrZSIRFdofe3Xw87nzErh73liCMlZoq/QW1TAXWis2wb5DP58rTGgWAHirJmAnBIXGDL5ViSgg1R9Gv3ZBYbxpAxqy9Fu2yopCzUdDUbTfDH0geFANXHz7KgOzt8icxdiWpNZxr48+d+MIXBKlFtFl3mr29mGBnBoaZDi1HwxBdcJjAZJG2pI8MPJJsvNEUNItpxX2NFvdZYalPXauRMuLBybWUYtHKRounjI0q1j16LBs1N9kM6VaiSwWDD0XdvDn3t4Ygip2Vm/MWc9b2AIJVHrYJGNkyxVJ822Tc97LW3DEJ+p4wZ+w75PWT/Cf2Iwazm/nY2iXsmhupcdjN5kbTlkyLRWyT/FDShyVCV40K1pHn6V4fcMBYjNPJHwOuBxqQXLbvV44IcCooTKXV56z5C0TGV2NSKDbF8b/qr7z8kQm/dep0VQqb+O6AX1henZQuSWoSVbrq5GgXa32xu3qW4+xzA7YatHtWxrGPQZP8SkVYvuTvfnkSEjoKW6KK1ZtqltsPPQps/KcFMge+6olgZYUbG7HfDXpp5zhh715yTTu1MfNPHHDHFHqmQm61W1dZ31ckCWwzC3dogMXTyVP77WDIsdjTmUwz9mSLNDUh633ZLZHqaZJJd+PvcP72UIsTycBUzGo1D39J/LMBtoU7izEUZ1PD+m3YT5ZigoF+WhFpw7FA/qPcsQW8PgNTHDVrgfDvL0OktpMe3WyTNDdyObqLmK8E/+PEOMe7y3WHs4/qQ2Kmu28HT+8AUwpLpd0n/C0FO2OzvR0k62V7V5up9K0NNhru3Q/epAvJ8xpCKqo/t8HZXv+qTUWVs4jbFn55nhRnRCDzedzx9qqVPHw7ckXRxEeADDPXgbS6lpcWeT0+SoTxNhS/9bO/yKHzAE79KOsfwgWlq7Xe/d1lI8UsPYh815GlDjcl5ODLnoKv5zhpDPNPA8tEGkzNJSDPeaTH3vTob6IB8yZFUfp8/+Y4Y4kRhNIP5J+CDIMuNKSKrsTdbG1eE4HwxJ5TzyFMoQsJ2hpp0+Zcgp5AbOWSqxrszOZ0IOHldH4m6szbPNYbB7hs4cSiXtaNqjfH0BeOV8uwsIsl3hv29mKr+L+Nl+fn99sryb3rbS0zYOtWXzwfp4nWrgWfdsc2fTCMDwUCTV7KT+3C5zx3Vd58mRCp27juNuSD3N2nC0AjLSvdvJpHGm/JAjPfAxCqfBmUHilaeDDHc0UMpI/eBQ+YsuHvCqTA6cTR79PcNs83Tzz9sYZiS5EzplOzuroSBbEI49z6YrcdTI7lTIjubXwXC6HyPdjo5TZkiW7vliO0M8UEqfZyiyxpqiWWoKuSq1OxNQTMlaZ27Io9slHrnZCUOsWq26cr3yoIkNJVZvu9sG83Bzl/6AIc22+zOWmIHb2eVKRItvfYHfw4s0jF3OPQfNyNXddh2PxwRNUDXIMbfNwvxASx+/C6+cnGD5HJyaNnVVffeXgTFLpo0xFwd7uMXLKo3IxoLvHzGED5bG8wBHD0E1uD1o4pUuO2eIp9Rbs57Ox5Mlwzm9s563db7rb8iQ+43s1Eb3/IB6/nFFw3Hunc9yW9m1pNXyoeKD7GIEqzoq/xMZUm4uujKQZDn0uRpfXW4uXNz9LDfJmvdavOqEOp64IEzGTd/BZoZOv1PX56IFqKcnXDzMGJCgFpVGJVHNum/ITu6Y4QPSt2YocPoaRz/P/RCLvr/FMAswZf8VJKia9bpdEjRaBTt3ME/BGDmaRVT3V7FkAbm82eRff4Mh9r7Hb7G6x8lwO+xlB4zzdS8GAuearDlERxwskQGD7x3vu+i4naFSeEkUtsiHY5v3pq3NjNSuCT0ByabTlpO+w/0zDNlsOeyH36rpdob4SiAFtebi0Cub8wAnUvJ6gevmyDPeI3i8xBlDULpwc3WJepqXUk5xeIFHwxjTo8srk4fmMN41h58Ax2WDo1mJhlETL0awLtuHePMV3WyYfSdDPLfor68hA9UqDd+D77s5Fd098J4OWK51Wi4ryLgCnOiqRThWujUvpRTCiyXBMTVNbuMdPNLadfT7GWCBlgE0K8cmxwCO+XjleOwJ9ZShoM6oGTPIquujQ6gh3kGwD/IuQ22zEYgXteEIYdm/hcSLwfd9iiNqAhlaWgPU1hMi7A9jlDg8GfIDnF2zcpCF/l2Amwnq7UNhO7WAZVfPup6gHBkyrQHJgPLwcDQ8uDwGh1tadC0mXwq5DGCQzADrCnV3eoSD9XFzfCioW8d56EZHedGobuHB6HeQB5VHVRT7y2KYtZYsuTz2QxUtUmlYIKwSv7PDMBy9i6HsIvV2mTqdV5tNfy1fF5j9DBaoowG6ejn1OY8mWcTrXh1kdrg+OF7iMFf3PNLDg8YS5/TxA7te8z8DwUSOOlEt85LzOvY+Vi38WhkehJ5/1tp9Ef/vgCY47JQ9f3qkEUMagSXxRjfJasrVHTVn+Y+APwFeLqCl52POx1AxBAHegoUj+1Nfd/AOKIuwnN/I+lNko93yaFrSbaj6IDkHq0vfHtgeDmGS3+FOdhQQXk86H5Q2WqktT8e218N07eXE978DsrwtCV5aXFYHEDXKUELmr8T9d4CcJV0chNz3dTGeVOSuGvW/DnilolZPStTr7aXof164+T1Fdl+WDJrjdh28Z9YQ2PWSfgUMzXoffP3Lb8kw2+vd9RJ+MX439/L/Er+7khYoUKBAgQIFChQoUKBAgQIFChQoUKBAgQIFChQoUKBAgQIFChQoUKBAgQIFChQosGv8H7BMELfyQj+YAAAAAElFTkSuQmCC",
    tech: [  "Next Js",  "Type Script", "Chakr UI" , ],
    LiveDemoUrl:
      " ",
    duration: "500",
    // GithubUrl:
    // " ",
  duration: "500",
  },
  {
    title: "Firebase Auth ",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6iprFpcW9opcGW1Yh3RRivAkKaHwwqzVRfw&usqp=CAU",
    tech: ["javaScript", "React js", "HTML", "CSS", "Material UI", "Firebase",],
    LiveDemoUrl: " ",
    duration: "600",
    GithubUrl:
    "https://github.com/IPH-Technologies-Pvt-Ltd/Firebase-authentication-and-authorization-react-js",
  duration: "600",
  },
  {
    title: "Dashboard",
    imgUrl:
      "https://www.bypeople.com/wp-content/uploads/2019/02/spur-admin-template-featured.png",
    tech: ["javaScript", "React js", "HTML", "CSS", "Material UI", "BootStrap-5" , "Firebase",],
    // LiveDemoUrl:
    //   " ",
    duration: "700",
    // GithubUrl:
    // " ",
  duration: "700",
  },
  {
    title: "Hotel Menu Card",
    imgUrl:
      "https://5.imimg.com/data5/SELLER/Default/2022/1/VY/MJ/UJ/41436037/hotel-menu-graphics-designing-service-500x500.jpg",

    tech: ["javaScript", "React js", "HTML", "CSS", "Material UI", "BootStrap-5" , "Firebase",],
    // LiveDemoUrl:
    //   " ",
    duration: "700",
    GithubUrl:
    "https://github.com/vikashg4/Hotel_menu_React_JS",
  duration: "700",
  
  },
  {
    title: "Application-Form",
    imgUrl:
      "https://i.pinimg.com/originals/82/44/c7/8244c71ad4794c430085185e3c47a392.jpg",
    tech: ["javaScript", "React js", "HTML", "CSS", "Material UI" ],
    // LiveDemoUrl:
    //   " ",
    duration: "700",
    GithubUrl:
    "https://github.com/vikashg4/Application-Form-UI-reactjs",
  duration: "700",
  },
  {
    title: "Firebase Push Notification",
    imgUrl:
      "https://shareurcodes.com/photos//FCM.jpg",
    tech: ["javaScript", "React js", "Firebase" , "HTML", "CSS"],
    // LiveDemoUrl:
    //   " ",
    duration: "700",
    GithubUrl:
    "https://github.com/vikashg4/Reactjs-Push-Notification",
  duration: "700",
  }
  ,
  {
    title: "DataList-Table",
    imgUrl:
      "https://docs.appian.com/suite/help/23.3/images/read_only_grid_with_record_type_and_user_filter.png",
    tech: ["javaScript", "React js", "Firebase" , "HTML", "CSS"],
    // LiveDemoUrl:
    //   "",
    duration: "700",
    GithubUrl:
    "https://github.com/vikashg4/YLL-website-clone-Reactjs",
  duration: "700",
  }
];

// Array of experience objects
export const experiences = [
  {
    date: "Feb 2023 - Present",
    company: "Iph Technology Pvt Ltd",
    position: "React JS Developer ",
    description:
      "I specialize in designing user interfaces for websites applications. ndustry trends, I bring digital ideas to life. I'm dedicated to delivering responsive, interactive, and visually appealing websites that engage users and elevate online experiences.s.",
  }, {
    date: "Nov 2022 - February 2023",
    company: "Smfo Aeronautic Pvt Ltd",
    position: "Research Trainer Engineer",
    description:
      " As a Research Trainer Engineer in the field of Robotics, I design and develop cutting-edge drones, robots, and automation solutions. With expertise in mechatronics, AI, and control systems, I create innovative, high-performance machines. My work showcases a passion for pushing the boundaries of technology and automation.",
  },  {
    date: " Nov 2021 - Jan 2022",
    company: "Lenskart solution Pvt Ltd",
    position: "Associate Analyst",
    description:
      "As an Associate Analyst at Lenskart, I contribute to the heart of an eyeglasses company's operations. I help interpret and analyze data to derive valuable insights that drive smarter decisions. My role supports the team in optimizing processes, enhancing customer experiences, and ensuring that Lenskart continues to provide top-quality eyewear solutions.",
  },
];


// Array of langue objects
export const langues = [
  {
    id: 1,
    src: html,
    title: "HTML",
    style: "shadow-orange-500",
  },
  {
    id: 2,
    src: css,
    title: "CSS",
    style: "shadow-blue-500",
  },
  {
    id: 3,
    src: js,
    title: "JavaScript",
    style: "shadow-yellow-500",
  },
  {
    id: 4,
    src: reactLangue,
    title: "React",
    style: "shadow-sky-500",
  },
  {
    id: 5,
    src: github,
    title: "GitHub",
    style: "shadow-gray-400",
  },
  {
    id: 6,
    src: tailwind,
    title: "Tailwind",
    style: "shadow-teal-600",
  },
  {
    id: 7,
    src: redux,
    title: "Redux",
    style: "shadow-teal-600",
  },
  // {
  //   id: 8,
  //   src: django,
  //   title: "Django",
  //   style: "shadow-emerald-700",
  // },
  {
    id: 9,
    src: firebase,
    title: "Firebase",
    style: "shadow-black",
  },
  {
    id: 10,
    src: mongodb,
    title: "Mongodb",
    style: "shadow-green-600",
  },
  {
    id: 11,
    src: bootstrap,
    title: "Bootstrap",
    style: "shadow-violet-500",
  },
  {
    id: 12,
    src: mui,
    title: "Mui material",
    style: "shadow-violet-500",
  },
];
