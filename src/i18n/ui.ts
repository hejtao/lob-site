export type CommandCopy = {
  name: string;
  detail: string;
};

export type FeatureCopy = {
  title: string;
  description: string;
  commands?: CommandCopy[];
};

export type PrivacyBlock =
  | { kind: "p"; text: string }
  | { kind: "ul"; items: string[] };

export type PrivacySection = {
  heading: string;
  blocks: PrivacyBlock[];
};

export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    tagline: string;
    about: string;
    features: string;
    download: string;
    language: string;
  };
  hero: {
    lines: string[];
    body: string;
    videoLabel: string;
  };
  about: {
    title: string;
    paragraphs: string[];
  };
  features: {
    title: string;
    intro: string;
    items: FeatureCopy[];
  };
  download: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    iosScanLine1: string;
    iosScanLine2: string;
    appStore: string;
    macHint: string;
    macButton: string;
    privacy: string;
    copyrightBefore: string;
    copyrightAfter: string;
  };
  privacy: {
    title: string;
    description: string;
    updated: string;
    intro: string;
    sections: PrivacySection[];
  };
  notFound: {
    title: string;
    body: string;
  };
};

const en: Dictionary = {
  meta: {
    title: "Lob — Speak on your iPhone. Talk to any AI app on your Mac.",
    description:
      "Use the voice input already on your iPhone. Lob types what you say into the AI app open on your Mac, right where the cursor is.",
  },
  nav: {
    tagline: "Talk to your Mac easily",
    about: "About",
    features: "Features",
    download: "Download",
    language: "Language",
  },
  hero: {
    lines: ["Speak on your iPhone. ", "Talk to any AI app on your Mac."],
    body: "Use the voice input already on your iPhone. Lob types what you say into the AI app open on your Mac, right where the cursor is.",
    videoLabel: "Speaking on an iPhone to an AI app on a Mac",
  },
  about: {
    title: "About",
    paragraphs: [
      "Lob is two apps, one on your iPhone and one in the Mac menu bar. Speak with the voice input already on your phone. The Mac app types those words into the AI app that has focus, right at the cursor.",
      "Install Lob on both devices. Leave the Mac app running, click into the field you want to talk to, and speak on the iPhone. After setup, the two devices stay connected over Bluetooth, so the cable can come out.",
    ],
  },
  features: {
    title: "Features",
    intro: "Use the voice input on your iPhone to talk to any AI app on your Mac.",
    items: [
      {
        title: "Your iPhone is the microphone",
        description:
          "The iPhone you already have is the microphone. No need to buy another one for your Mac.",
      },
      {
        title: "Keep the voice input you already use",
        description:
          "Dictate with the voice input already on your iPhone, including the built-in one. Lob only sends that text to your Mac.",
      },
      {
        title: "Typed at the Mac cursor",
        description:
          "Lob types into the field that's focused on your Mac, just like a keyboard. Stay in the AI app you already have open.",
      },
      {
        title: "No copy, AirDrop, or Notes",
        description:
          "The words go straight from your iPhone into the Mac field. Skip the copy, the AirDrop, and the stop in Notes.",
      },
      {
        title: "Connected over Bluetooth",
        description:
          "Once both apps are installed, your iPhone and Mac talk over Bluetooth. No cable to leave plugged in.",
      },
      {
        title: "Press Return on Mac",
        description:
          "Turn it on, and the Mac presses Return after the text is in the field. A terminal submits the line instead of starting a new one.",
      },
      {
        title: "Text Shortcuts",
        description: "A shortcut runs as soon as you dictate its trigger.",
        commands: [
          {
            name: "Send",
            detail: "taps the Send button, which sends the message and clears the box.",
          },
          { name: "Clear", detail: "empties the input box." },
          {
            name: "Delete",
            detail: "removes the number of characters you set, immediately before the trigger.",
          },
          { name: "Newline", detail: "inserts the number of line breaks you set." },
          { name: "Replace", detail: "swaps the trigger for the text you enter." },
        ],
      },
    ],
  },
  download: {
    eyebrow: "Download",
    titleLine1: "Get Lob on your iPhone",
    titleLine2: "and your Mac.",
    subtitle: "Scan the QR code or click below to download Lob.",
    iosScanLine1: "Scan with your iPhone",
    iosScanLine2: "to install Lob",
    appStore: "Download on the App Store",
    macHint: "Install it on your Mac and leave it running in the menu bar.",
    macButton: "Download for Mac",
    privacy: "Privacy",
    copyrightBefore: "Copyright ©",
    copyrightAfter: "Lob. All rights reserved.",
  },
  privacy: {
    title: "Privacy",
    description:
      "How the Lob iPhone app and Mac app handle the text you send, Bluetooth, the camera, Accessibility, shortcuts, and purchases.",
    updated: "Updated November 24, 2026",
    intro:
      "Lob is an iPhone app and a Mac menu bar app. Text you enter on the iPhone goes over Bluetooth to your Mac and is typed at the cursor. Lob has no accounts. The developer does not receive that text.",
    sections: [
      {
        heading: "The text you send",
        blocks: [
          {
            kind: "ul",
            items: [
              "The iPhone app sends the text in the box. Dictation uses the voice input already on your iPhone. Lob does not request the microphone, and it receives the finished text only.",
              "The text travels over Bluetooth to the Mac you paired by scanning its code.",
              "The Mac app types it into the field that has focus. It holds the text in memory only while typing, and does not write it to a file.",
            ],
          },
        ],
      },
      {
        heading: "iPhone",
        blocks: [
          {
            kind: "ul",
            items: [
              "Bluetooth is used to connect to your Mac and send text.",
              "The camera is used only to scan the pairing code on your Mac. Lob keeps the code so it can reconnect, and does not keep the picture.",
              "Shortcuts you create, and the setting for pressing Return on the Mac, stay on this iPhone.",
              "Forgetting the Mac deletes the saved pairing code.",
              "When the iPhone connects, it proves to the Mac that it is the Lob app, using Apple App Attest. The private key stays on the iPhone. Apple issues the first proof for a Mac, and that request does not include your text. The Mac keeps the matching public key on that Mac and uses it to recognize this phone later.",
            ],
          },
        ],
      },
      {
        heading: "Mac",
        blocks: [
          {
            kind: "ul",
            items: [
              "Bluetooth is used to receive text from your iPhone. While Lob is running, the Mac advertises a short code from its own identifier, so your iPhone can tell it apart from another Mac running Lob.",
              'Accessibility is used to type the received text at the cursor. With "Press Return on Mac" on, it also presses Return. Lob does not read the screen, other apps, or keys you type on the Mac keyboard.',
              "The pairing code is shown on the Mac. Its secret is new each time the Mac app launches, so an old code stops working. The Mac keeps a stable identifier so your iPhone can recognize it.",
            ],
          },
        ],
      },
      {
        heading: "Purchases",
        blocks: [
          {
            kind: "p",
            text: "Text Shortcuts on the iPhone unlock with a yearly subscription or a one-time purchase. Apple processes the payment. Lob checks the unlock on the device. Payment details stay with Apple. A subscription is managed in Settings → Apple ID → Subscriptions.",
          },
        ],
      },
      {
        heading: "What Lob leaves alone",
        blocks: [
          {
            kind: "ul",
            items: [
              "Lob does not track you across apps or websites. The iPhone app's privacy report lists no tracking and no collected data types.",
              "There is no analytics or advertising SDK.",
              "Lob does not collect contacts, location, photos, or the contents of other apps.",
            ],
          },
        ],
      },
      {
        heading: "This website",
        blocks: [
          {
            kind: "p",
            text: "These pages are static. The site does not ask you to sign in, and it does not use tracking cookies.",
          },
        ],
      },
    ],
  },
  notFound: {
    title: "404 Not Found",
    body: "Page not found.",
  },
};

const zh: Dictionary = {
  meta: {
    title: "Lob — 在 iPhone 上说话，跟 Mac 上的任意 AI 应用对话。",
    description:
      "用 iPhone 上已有的语音输入。Lob 会把你说的话输入到 Mac 上正在打开的 AI 应用里，就在光标所在的位置。",
  },
  nav: {
    tagline: "轻松跟 Mac 说话",
    about: "关于",
    features: "功能",
    download: "下载",
    language: "语言",
  },
  hero: {
    lines: ["在 iPhone 上说话，", "跟 Mac 上的任意 AI 应用对话。"],
    body: "用 iPhone 上已有的语音输入。Lob 会把你说的话输入到 Mac 上正在打开的 AI 应用里，就在光标所在的位置。",
    videoLabel: "在 iPhone 上说话，内容进入 Mac 上的 AI 应用",
  },
  about: {
    title: "关于",
    paragraphs: [
      "Lob 是两个 App：一个在 iPhone 上，一个在 Mac 菜单栏里。用手机上已有的语音输入说话，Mac 端会把这些文字打进当前聚焦的 AI 应用，就在光标处。",
      "两台设备都装上 Lob。让 Mac 端保持运行，点进你想对话的输入框，然后在 iPhone 上说话。设置完成后，两台设备通过蓝牙保持连接，线可以拔掉。",
    ],
  },
  features: {
    title: "功能",
    intro: "用 iPhone 上的语音输入，跟 Mac 上的任意 AI 应用对话。",
    items: [
      {
        title: "你的 iPhone 就是麦克风",
        description: "手里这台 iPhone 就是麦克风，不用再为 Mac 另买一只。",
      },
      {
        title: "继续用你已经习惯的语音输入",
        description:
          "用 iPhone 上已有的语音输入听写，包括系统自带的。Lob 只把转好的文字发到你的 Mac。",
      },
      {
        title: "输入到 Mac 的光标处",
        description:
          "Lob 像键盘一样，把文字打进 Mac 上当前聚焦的输入框。不用离开已经打开的 AI 应用。",
      },
      {
        title: "不用复制、隔空投送或备忘录",
        description:
          "文字从 iPhone 直接进入 Mac 的输入框。不用复制，不用隔空投送，也不用先停在备忘录里。",
      },
      {
        title: "通过蓝牙连接",
        description: "两个 App 都装好后，iPhone 和 Mac 通过蓝牙通信，不用一直插着线。",
      },
      {
        title: "在 Mac 上按回车",
        description:
          "打开这个选项后，文字进入输入框，Mac 会接着按一次回车。在终端里，这是提交当前这一行，而不是另起一行。",
      },
      {
        title: "文本快捷指令",
        description: "一说完触发词，快捷指令就会执行。",
        commands: [
          { name: "发送", detail: "会点按发送按钮，从而发送消息并清空输入框。" },
          { name: "清空", detail: "会清空输入框。" },
          { name: "删除", detail: "会删掉触发词前面、你设定数量的字符。" },
          { name: "换行", detail: "会插入你设定数量的换行。" },
          { name: "替换", detail: "会把触发词换成你输入的文字。" },
        ],
      },
    ],
  },
  download: {
    eyebrow: "下载",
    titleLine1: "在 iPhone 和 Mac 上",
    titleLine2: "安装 Lob。",
    subtitle: "扫二维码，或点下面的按钮下载 Lob。",
    iosScanLine1: "用 iPhone 扫码",
    iosScanLine2: "安装 Lob",
    appStore: "在 App Store 下载",
    macHint: "装到 Mac 上，让它在菜单栏里保持运行。",
    macButton: "下载 Mac 版",
    privacy: "隐私",
    copyrightBefore: "版权所有 ©",
    copyrightAfter: "Lob。保留所有权利。",
  },
  privacy: {
    title: "隐私",
    description:
      "Lob 的 iPhone App 和 Mac App 如何处理你发送的文字、蓝牙、相机、辅助功能、快捷指令和购买。",
    updated: "更新于 2026 年 11 月 24 日",
    intro:
      "Lob 是一个 iPhone App 和一个 Mac 菜单栏 App。你在 iPhone 上输入的文字会通过蓝牙发到 Mac，并在光标处输入。Lob 没有账号。开发者收不到这些文字。",
    sections: [
      {
        heading: "你发送的文字",
        blocks: [
          {
            kind: "ul",
            items: [
              "iPhone App 发送输入框里的文字。听写使用 iPhone 上已有的语音输入。Lob 不申请麦克风权限，只接收已经转好的文字。",
              "文字通过蓝牙传到你扫码配对的那台 Mac。",
              "Mac App 把文字输入到当前聚焦的输入框。文字只在输入过程中留在内存里，不会写入文件。",
            ],
          },
        ],
      },
      {
        heading: "iPhone",
        blocks: [
          {
            kind: "ul",
            items: [
              "蓝牙用来连接你的 Mac 并发送文字。",
              "相机只用来扫描 Mac 上的配对码。Lob 会留下这个码，以便重新连接，不会保留照片。",
              "你创建的快捷指令，以及是否在 Mac 上按回车，都保存在这台 iPhone 上。",
              "忘记这台 Mac 时，已保存的配对码会被删除。",
              "iPhone 连接时，会用 Apple App Attest 向 Mac 证明自己是 Lob。私钥留在 iPhone 上。Apple 会为某台 Mac 签发第一次证明，这次请求不含你的文字。Mac 把对应的公钥留在这台 Mac 上，之后用来认出这台手机。",
            ],
          },
        ],
      },
      {
        heading: "Mac",
        blocks: [
          {
            kind: "ul",
            items: [
              "蓝牙用来接收 iPhone 发来的文字。Lob 运行时，Mac 会广播一段由自身标识生成的短码，让你的 iPhone 能把它和另一台也在运行 Lob 的 Mac 区分开。",
              "辅助功能用来把收到的文字输入到光标处。打开「在 Mac 上按回车」后，也会按下回车。Lob 不读取屏幕、其他 App，也不读取你在 Mac 键盘上按下的键。",
              "配对码显示在 Mac 上。其中的密钥在 Mac App 每次启动时都会更新，旧码随即失效。Mac 会保留一个固定标识，让你的 iPhone 能认出它。",
            ],
          },
        ],
      },
      {
        heading: "购买",
        blocks: [
          {
            kind: "p",
            text: "iPhone 上的文本快捷指令可以通过年订阅或一次性购买解锁。付款由 Apple 处理。Lob 在设备上检查是否已解锁。支付信息留在 Apple。订阅可在「设置 → Apple ID → 订阅」中管理。",
          },
        ],
      },
      {
        heading: "Lob 不会碰的内容",
        blocks: [
          {
            kind: "ul",
            items: [
              "Lob 不会跨 App 或网站跟踪你。iPhone App 的隐私报告里没有跟踪，也没有列出收集的数据类型。",
              "没有分析和广告 SDK。",
              "Lob 不收集通讯录、位置、照片，也不收集其他 App 里的内容。",
            ],
          },
        ],
      },
      {
        heading: "本网站",
        blocks: [
          {
            kind: "p",
            text: "这些页面是静态的。网站不要求登录，也不使用跟踪 Cookie。",
          },
        ],
      },
    ],
  },
  notFound: {
    title: "页面未找到",
    body: "找不到这个页面。",
  },
};

export const ui = { en, zh } as const;
