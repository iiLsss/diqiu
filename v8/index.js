var a = 10;
var b = 20;
var c = a + b;



// LdaConstant [0] 从常量池中加载索引0的常量到累加寄存器中
// Star r1 把累加器的值保存到目标寄存器中
// LdaZero 把0保存到累加寄存器中
// Star r2 把累加器的值0保存到目标寄存器中
// Mov <closure>, r3 保存r3寄存器的值
// CallRuntime [DeclareGlobals], r1-r3

// StackCheck    检查栈是否溢出

// LdaSmi [10]   加载10到累加寄存器中
// StaGlobal [1] 把累加寄存器的值保存到常量池索引1处

// LdaSmi [20]   加载20到累加寄存器中
// StaGlobal [2] 把累加寄存器的值保存到常量池索引2处

// LdaGlobal [1] 从常量池加载索引1到累加寄存器
// Star r1       把累加器的值10保存到目标计数器中
// LdaGlobal [2] 从常量池加载索引2的值20到累加寄存器
// Add r1  把r1寄存器的值加到累加寄存器中，累加寄存器值为30
// StaGlobal [3] 把累加寄存器的值保存到常量池索引3处
// LdaUndefined  把Undefined保存到累加寄存器中
// Return        返回累加寄存器中的值