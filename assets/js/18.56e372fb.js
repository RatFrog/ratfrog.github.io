(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{434:function(_,v,t){"use strict";t.r(v);var a=t(18),s=Object(a.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("TOC"),_._v(" "),t("h1",{attrs:{id:"嵌入式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#嵌入式"}},[_._v("#")]),_._v(" 嵌入式")]),_._v(" "),t("h2",{attrs:{id:"怎样学会单片机"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#怎样学会单片机"}},[_._v("#")]),_._v(" 怎样学会单片机")]),_._v(" "),t("p",[_._v("1.怎样动手从头开始？")]),_._v(" "),t("p",[_._v("答：淘宝买个销量高的51单片机开发板。")]),_._v(" "),t("p",[_._v("2.怎样理解晶振/中断/存储器等？")]),_._v(" "),t("p",[_._v("答：晶振-模电；中断-单片机原理；存储器-数字电路或单片机原理。（郭天祥、天狼星视频教程看看就懂个大概了）")]),_._v(" "),t("p",[_._v("3.怎样记住单片机汇编指令？")]),_._v(" "),t("p",[_._v("答：用开发板从最简单的代码开始写。（开发板配套的教程或者网上搜）")]),_._v(" "),t("p",[_._v("4.怎样看懂单片机外围电路？")]),_._v(" "),t("p",[_._v("学点最基础的模电/数电知识（晶体管、门电路什么的，郭天祥、天狼星视频教程都讲）")]),_._v(" "),t("p",[_._v("5.为什么都说用C比汇编好？")]),_._v(" "),t("p",[_._v("个人觉得，C易写、易读。")]),_._v(" "),t("p",[_._v("6.需要些什麼前置知識？")]),_._v(" "),t("p",[_._v("C语言+最基础的模电/数电知识。")]),_._v(" "),t("p",[_._v("总结：淘宝买块销量高的开发板，对着视频教程和文字教程，结合百度/谷歌开始写代码吧！")]),_._v(" "),t("p",[_._v("1.强烈推荐此书（汇编/C语言都有，此书无敌，此书无敌，此书无敌）8051微控制器和嵌入式系统 (豆瓣)深入理解8051单片机系统 （新版)")]),_._v(" "),t("p",[_._v("2.推荐网站：杜洋工作室 DoYoung Studio（http://www.doyoung.net/）")]),_._v(" "),t("p",[_._v("3.百度、谷歌、各种论坛博客，如电子发烧友论坛。（http://bbs.elecfans.com/）")]),_._v(" "),t("h2",{attrs:{id:"软件说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#软件说明"}},[_._v("#")]),_._v(" 软件说明：")]),_._v(" "),t("ol",[t("li",[_._v("USB下载口驱动程序CH340 →开发板USB下载口驱动程序，首次通过USB下载程序之前，需要在电脑上预安装驱动。")]),_._v(" "),t("li",[_._v("STC-ISP下载烧写软件 →用来将keil编译好的程序代码下载到51单片机中。")]),_._v(" "),t("li",[_._v("Keil集成开发工具 →编程开发软件，用于编写51单片机的程序。")]),_._v(" "),t("li",[_._v("SecureCRT →类似xp系统下的超级终端，通过它与单片机进行通信，打印信息，给开发板进行整板测试。")]),_._v(" "),t("li",[_._v("其它常用工具软件 →一些常用的工具软件。")]),_._v(" "),t("li",[_._v("PDF阅读器 →用于阅读pdf文件。开发板的用户手册、原理图等都用它查看。")])]),_._v(" "),t("h2",{attrs:{id:"usb下载口驱动程序ch340"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usb下载口驱动程序ch340"}},[_._v("#")]),_._v(" USB下载口驱动程序CH340")]),_._v(" "),t("blockquote",[t("p",[_._v("开发板USB下载口驱动程序，首次通过USB下载程序之前，需要在电脑上预安装驱动。")])]),_._v(" "),t("p",[_._v("安装后开发板和电脑才能正常通过数据线连接")]),_._v(" "),t("h2",{attrs:{id:"keil集成开发工具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keil集成开发工具"}},[_._v("#")]),_._v(" Keil集成开发工具")]),_._v(" "),t("blockquote",[t("p",[_._v("编程开发软件，用于编写51单片机的程序。")])]),_._v(" "),t("p",[_._v("新增项目：\nProject——New Project——填写文件名如test1_1——点击保存——在弹框中选择对应的单片机型号（AT89C52）——点击确定")]),_._v(" "),t("p",[_._v("新建文件与项目绑定：\nFile——New——Ctrl+s保存——输入文件名test1_1.c——点击保存——选择目录下的Target1下的Source Group1右击选择Add File To Group 'Source Group1'——选择test1_1.c——Add——确定即可添加成功")]),_._v(" "),t("p",[_._v("设置Hz\nOptions for Target——选择Target标签——设置Xtal(MHz)11.0592")]),_._v(" "),t("p",[_._v("设置生成十六进制可执行文件\nOptions for Target——选择Output标签——勾选Create HEX File")]),_._v(" "),t("p",[_._v("运行代码\nBuild target")]),_._v(" "),t("p",[_._v("调试代码\nBuild target——Start/Stop Debug Session——可选择View——Watch&Call Stack Windows打开监控窗口——Peripherals——I/O-Ports——Port1开启模拟测试")]),_._v(" "),t("h2",{attrs:{id:"stc-isp下载烧写软件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#stc-isp下载烧写软件"}},[_._v("#")]),_._v(" STC-ISP下载烧写软件")]),_._v(" "),t("blockquote",[t("p",[_._v("用来将keil编译好的程序代码下载到51单片机中。")])]),_._v(" "),t("p",[_._v("设置下载参数:\n设置单片机型号为STC89C52;\n设置串口号为COM3（依据自己电脑）;\n最低波特比为2400;\n最高波特比为115200;")]),_._v(" "),t("p",[_._v("下载文件到单片机:\n打开程序文件——选择test1_1.hex——点击确定;\n点击下载/编程——再单片机板子上按下重启按钮开始下载程序")]),_._v(" "),t("h2",{attrs:{id:"securecrt-连接工具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#securecrt-连接工具"}},[_._v("#")]),_._v(" SecureCRT 连接工具")]),_._v(" "),t("blockquote",[t("p",[_._v("通过它与单片机进行通信，打印信息，给开发板进行整板测试。")])]),_._v(" "),t("h2",{attrs:{id:"学单片机需要什么基础"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#学单片机需要什么基础"}},[_._v("#")]),_._v(" 学单片机需要什么基础？")]),_._v(" "),t("ol",[t("li",[_._v("与以前所学的只是关联很少;")]),_._v(" "),t("li",[_._v("只需要掌握很基本的数电模电知识，如：二进制、十进制、十六进制之间的转换，与、或、非逻辑关系等;")]),_._v(" "),t("li",[_._v("对各种器件的概念基本上是从0开始;")]),_._v(" "),t("li",[_._v("如果要用C语言编程，需具备简单的C语言基础;")]),_._v(" "),t("li",[_._v("所有人都站在同一起跑线上;")])]),_._v(" "),t("h2",{attrs:{id:"什么是单片机"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是单片机"}},[_._v("#")]),_._v(" 什么是单片机？")]),_._v(" "),t("p",[_._v("单板机")]),_._v(" "),t("blockquote",[t("p",[_._v("将CPU芯片、寄存器芯片、I/O接口芯片和简单的I/O设备（小键盘、LED显示器）等装配在一块印刷电路板上，再配上监控程序（固化在ROM中），就构成了一台单板微型计算机（简称单片机）。")])]),_._v(" "),t("p",[_._v("单片机")]),_._v(" "),t("blockquote",[t("p",[_._v("在一片集成电路芯片上集成微处理器、存储器、I/O接口电路，从而构成了单芯片微型计算机，即单片机。Intel公司推出了MCS-51系列单片机：集成8位CPU、4K字节ROM、128字节RAM、4个8位并口、1个全双工串行口、2个16位定时/计数器。寻址范围64k，并有控制功能较强的布尔处理器。")])]),_._v(" "),t("h2",{attrs:{id:"单片机能做什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#单片机能做什么"}},[_._v("#")]),_._v(" 单片机能做什么？")]),_._v(" "),t("ol",[t("li",[_._v("手持粮库温度巡检设备")]),_._v(" "),t("li",[_._v("毕设答辩打分器")]),_._v(" "),t("li",[_._v("电话台灯")]),_._v(" "),t("li",[_._v("自动感应水龙头")]),_._v(" "),t("li",[_._v("凡是与控制或简单计算有关的电子设备都可以用单片机来实现。再根据实际情况选择不同性能的单片机，如：atmel,stc,pic,avr,凌阳,80C51,arm等。")]),_._v(" "),t("li",[_._v("工业自动化：数据采集、测控计数。")]),_._v(" "),t("li",[_._v("智能仪器仪表：数字示波器、数字信号源。")]),_._v(" "),t("li",[_._v("消费类电子产品：洗衣机、电冰箱、空调、电视、微波炉、手机、IC卡、汽车电子设备等。")]),_._v(" "),t("li",[_._v("通讯方面：调制解调器、程控交换技术、手机、小灵通等。")]),_._v(" "),t("li",[_._v("武器装备：飞机、军舰、坦克、导弹、航天飞机、鱼雷制导、智能武器等。")])]),_._v(" "),t("h2",{attrs:{id:"怎么开始学习"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#怎么开始学习"}},[_._v("#")]),_._v(" 怎么开始学习？")]),_._v(" "),t("ol",[t("li",[_._v("实践第一。")]),_._v(" "),t("li",[_._v("补充必要的理论知识，缺什么补什么。")]),_._v(" "),t("li",[_._v("做工程项目积累经验。（可在网上搜集题目，也可以自己有什么想法大胆去实验）")])]),_._v(" "),t("h2",{attrs:{id:"电平特性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#电平特性"}},[_._v("#")]),_._v(" 电平特性")]),_._v(" "),t("ol",[t("li",[_._v("数字电路中只有两种电平：高和低")]),_._v(" "),t("li",[_._v("定时单片机为TTL电平：高+5V  低0V")]),_._v(" "),t("li",[_._v("RS232电平：计算机的串口：高-12V  低+12V。所以计算机与单片机之间通讯时需要加电平转换芯片max232。（实验板左下角）")])]),_._v(" "),t("h2",{attrs:{id:"_2进制与16进制的表示及转换"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2进制与16进制的表示及转换"}},[_._v("#")]),_._v(" 2进制与16进制的表示及转换")]),_._v(" "),t("p",[_._v("数字电路中两种电平特性决定了它")]),_._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("2进制   10进制   16进制\n0       6        110\n1       7        111\n10      8        1000\n11      9        1001\n100     10       1010\n101     11       1011\n")])])]),t("p",[_._v("十六进制")]),_._v(" "),t("ol",[t("li",[_._v("是二进制的简短表示形式。")]),_._v(" "),t("li",[_._v("十进制中的0-15分别表示为十六进制的0-9-A-H")]),_._v(" "),t("li",[_._v("熟练掌握二进制与十进制之间的转换。规律：一般四个二进制数放在一起转换成一个十六进制数，转换时先把二进制数转换为十进制数，再把十进制数转换为十六进制数。\nB表示为二进制，H为十六进制。\n如：0001B->1->1H\n1001B->9->9H\n1010B->10->AH\n00101100->44->2CH")])]),_._v(" "),t("h2",{attrs:{id:"二进制数的逻辑运算"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二进制数的逻辑运算"}},[_._v("#")]),_._v(" 二进制数的逻辑运算")]),_._v(" "),t("ol",[t("li",[t("p",[_._v("与运算\n与运算是实现，必须都有，否则就没有。这种逻辑关系的一种运算。运算符为“.”。")])]),_._v(" "),t("li",[t("p",[_._v("或运算\n或运算是实现，只要其中之一有，就有。这种逻辑关系的一种运算。运算符为”+“")])]),_._v(" "),t("li",[t("p",[_._v("非运算\n非运算是实现，求反。这种逻辑的一种运算。运算符为”-“")])]),_._v(" "),t("li",[t("p",[_._v("异或运算\n异或运算是实现，必须不同，否则就没有。这种逻辑的一种运算。运算符为”+“")])])]),_._v(" "),t("h2",{attrs:{id:"_8051单片机介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8051单片机介绍"}},[_._v("#")]),_._v(" 8051单片机介绍")]),_._v(" "),t("p",[_._v("80C51是MCS-51系类中的一个典型品种;其他厂商以8051为基核开发出的CMOS工艺单片机产品统称为80C51系列。当前常用的80C51系列单片机主要产品有：\nIntel的：80C31、80C51、87C51、80C32、80C52、87C52等;\nATMEL的：89C51、89C52、89C2051等;\nPhilips、华邦、Dallas、STC Siemens(Infineon)等公司的许多产品。")]),_._v(" "),t("h2",{attrs:{id:"单片机上stc-89c52rc-40c-pdip-0721cv4336-的标号含义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#单片机上stc-89c52rc-40c-pdip-0721cv4336-的标号含义"}},[_._v("#")]),_._v(" 单片机上STC 89C52RC 40C-PDIP 0721CV4336 的标号含义")]),_._v(" "),t("p",[_._v("STC STC公司生成\n89  89系类\nC   cmos"),t("br"),_._v("\n52  内部存储空间 2 2*4=8k\n40  晶振最高频率40MHZ\nC   商业级别(0度-85度) I 工业级(-40度-125度)\nPDIP    封装格式双列直插式\n0721C   07年第21周产\nCV4336  该批次产品型号")]),_._v(" "),t("h2",{attrs:{id:"_80c51的引脚封装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_80c51的引脚封装"}},[_._v("#")]),_._v(" 80C51的引脚封装")]),_._v(" "),t("p",[_._v("总线型      非总线型\n80C51/89C51 89C2051")]),_._v(" "),t("p",[_._v("P3第二功能各引脚功能定义：\nP3.0:RXD串行口输入\nP3.1:TXD串行口输出\nP3.2:INTO外部中断0输入\nP3.3:INT1外部中断1输入\nP3.4:T0定时器0外部输入\nP3.5:T1定时器1外部输入\nP3.6:WR外部写控制\nP3.7:RD外部读控制")]),_._v(" "),t("h2",{attrs:{id:"总线-bus"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总线-bus"}},[_._v("#")]),_._v(" 总线（BUS）")]),_._v(" "),t("p",[_._v("总线（BUS）是计算机各部件之间传递信息的公共通道。微机中有内部总线和外部总线两类。内部总线是CPU内部之间的连线。外部总线是指CPU与其它部件之间的连线。外部总线有三种：数据总线DB（Data Bus），地址总线AB（Address Bus）和控制总线CB（Control Bus）")]),_._v(" "),t("p",[_._v("CPU: 由运算和控制逻辑组成，同时还包括中断系统和部分外部特殊功能寄存器。")]),_._v(" "),t("p",[_._v("RAM: 用于存放可以读写的数据，如运算的中间结果、最终结果以及欲显示的数据。")]),_._v(" "),t("p",[_._v("ROM: 用于存放程序、一些原始数据和表格。")]),_._v(" "),t("p",[_._v("I/O口: 四个8位并行I/O口，既可用作输入，又可用作输出。")]),_._v(" "),t("p",[_._v("T/C: 两个定时/计数器，即可以工作在定时模式，也可以工作在计数模式。")]),_._v(" "),t("p",[_._v("五个中断源的中断控制系统")]),_._v(" "),t("p",[_._v("一个全双工UART(通用异步接口发送器)的串行I/O口，用于实现单片机之间或单片机与微机之间的串行通信。")]),_._v(" "),t("p",[_._v("片内振荡器和时钟产生电路，石英晶体和微调电容需要外接。最高振荡频率取决于单片机型号及性能")]),_._v(" "),t("h2",{attrs:{id:"c51知识"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#c51知识"}},[_._v("#")]),_._v(" C51知识")]),_._v(" "),t("ol",[t("li",[_._v("C语言是一种编译型程序设计语言，它兼顾了多种高级语言的特点，并具备汇编语言的功能。目前，使用C语言进行程序设计已经成为软件开发的一个主流。用C语言开发系统可以大大缩短开发周期，明显增强程序的可读性，便于改进、扩充和移植。而针对8051的C语言日趋成熟，成为专业化的实用高级语言。")]),_._v(" "),t("li",[_._v("C语言作为一种非常方便的语言而得到广泛的支持，很多硬件开发都用C语言编程，如：各种单片机、DSP、ARM等。")]),_._v(" "),t("li",[_._v("C语言程序本身不依赖于机器硬件系统，基本上不作修改就可将程序从不同的单片机中移植过来。")]),_._v(" "),t("li",[_._v("C提供了很多数学函数并支持浮点运算，开发效率高，故可缩短开发时间，增加程序可读性和可维护性。")])]),_._v(" "),t("h2",{attrs:{id:"c-51与asm-51相比-有如下优点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#c-51与asm-51相比-有如下优点"}},[_._v("#")]),_._v(" C-51与ASM-51相比，有如下优点：")]),_._v(" "),t("ol",[t("li",[_._v("对单片机的指令系统不要求了解，仅要求对8051的存储器结构有初步了解;")]),_._v(" "),t("li",[_._v("寄存器分配、不同存储器的寻址及数据类型等细节可由编译器管理。")]),_._v(" "),t("li",[_._v("程序有规范的结构，可分成不同的函数，这种方式可使程序结构化;")]),_._v(" "),t("li",[_._v("提供的库包含很多标准子程序，具有较强的数据处理能力;")]),_._v(" "),t("li",[_._v("由于具有方便的模块化编程技术，使已编好的程序可以容易的移植;")])]),_._v(" "),t("h2",{attrs:{id:"c-51的数据类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#c-51的数据类型"}},[_._v("#")]),_._v(" C-51的数据类型")]),_._v(" "),t("p",[_._v("基本数据类型")]),_._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("类型    符号    关键字              所占位数    数的表示范围\n整型    有      (signed)int         16         -32768~32767\n整型    有      (signed)short       16         -32768~32767\n整型    有      (signed)long        32         -2147483648~2147483647\n整型    无      (unsigned)int       16         0~65535\n整型    无      (unsigned)short int 16         0~65535\n整型    无      (unsigned)long int  32         0~4294967295\n实型    有      float               32         3.4e-38~3.4e308\n实型    有      double              64         1.7e-308~1.7e308\n实型    有      char                8          -128~127\n实型    无      unsigned char       8          0~255\n")])])]),t("h2",{attrs:{id:"c-51的数据类型扩充定时"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#c-51的数据类型扩充定时"}},[_._v("#")]),_._v(" C-51的数据类型扩充定时")]),_._v(" "),t("p",[_._v("sfr:特殊功能寄存器声明\nsfr16:sfr的16位数据声明\nsbit:特殊功能位声明\nbit:位变量声明\n例子：sfr SCON = 0x98;\nsfr16 T2 = 0xCC;\nsbit 0V = PSW^2;")]),_._v(" "),t("h2",{attrs:{id:"c-51数据的存储类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#c-51数据的存储类型"}},[_._v("#")]),_._v(" C-51数据的存储类型")]),_._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("数据类型        变量名\nchar           var1;\nbit            flags;\nunsigned char  vextor[10];\nint            wwww;\n\n注意：变量名不能用C语言中的关键字表示。\n")])])]),t("h2",{attrs:{id:"c-51的包含的头文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#c-51的包含的头文件"}},[_._v("#")]),_._v(" C-51的包含的头文件")]),_._v(" "),t("p",[_._v("通常有：reg")]),_._v(" "),t("h2",{attrs:{id:"linux嵌入式arm开发"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux嵌入式arm开发"}},[_._v("#")]),_._v(" Linux嵌入式ARM开发")]),_._v(" "),t("h3",{attrs:{id:"c语言编译过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#c语言编译过程"}},[_._v("#")]),_._v(" C语言编译过程")]),_._v(" "),t("p",[_._v("$ vi hello.c // 编辑示例")]),_._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v('// hello.c\n#include <stdio.h>\n\nint main()\n{\n    printf("hello world\\n");\n}\n')])])]),t("p",[_._v("$ gcc hello.c // 编译")]),_._v(" "),t("p",[_._v("$ ./a.out // 执行")]),_._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("hello world\n")])])]),t("p",[_._v("四步操作：")]),_._v(" "),t("p",[_._v("1.gcc -E 预处理(Preprocessing)")]),_._v(" "),t("p",[_._v("$ gcc -E hello.c -o hello.i")]),_._v(" "),t("p",[_._v("预处理用于将所有的#include头文件以及宏定义替换成其真正的内容")]),_._v(" "),t("p",[_._v("2.gcc -S 编译(Compilation)")]),_._v(" "),t("p",[_._v("$ gcc -S hello.i -o hello.s")]),_._v(" "),t("p",[_._v("将经过预处理之后的程序转换成特定汇编代码(assembly code)的过程")]),_._v(" "),t("p",[_._v("3.gcc -c 汇编(Assemble)")]),_._v(" "),t("p",[_._v("$ gcc -c hello.s -o hello.o")]),_._v(" "),t("p",[_._v("汇编过程将上一步的汇编代码转换成机器码(machine code)")]),_._v(" "),t("p",[_._v("4.gcc -o 链接(Linking)")]),_._v(" "),t("p",[_._v("$ gcc -o build hello.o\n$ ./build // 执行")]),_._v(" "),t("p",[_._v("链接过程将多个目标文以及所需的库文件(.so等)链接成最终的可执行文件")]),_._v(" "),t("h3",{attrs:{id:"预处理的使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#预处理的使用"}},[_._v("#")]),_._v(" 预处理的使用")]),_._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v('6.c\n#include <stdio.h>\n\n#define ABC (a+b);\nint main()\n{\n   int a = 1;\n   int b = 2;\n   int c;\n   c = ABC(a,b);\n   printf("a+b=%d\\n",c);\n   printf("the %s,%s,%d\\n",__FUNCTION__,__FILE__,__LINE__);\n   return 0;\n}\n')])])]),t("p",[_._v("$ gcc 6.c")]),_._v(" "),t("p",[_._v("$ ./a.out")]),_._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("a+b=3\nthe main,6.c,11\n")])])]),t("p",[_._v("1.#include 文件包含")]),_._v(" "),t("p",[_._v("2.#define 宏定义")]),_._v(" "),t("p",[_._v("3.ifdef #else #endif... 条件编译")]),_._v(" "),t("p",[_._v("4."),t("strong",[_._v("FILE")]),_._v("... 预定义宏")])],1)}),[],!1,null,null,null);v.default=s.exports}}]);