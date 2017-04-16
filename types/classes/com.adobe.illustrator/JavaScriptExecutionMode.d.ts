/// <reference path="../../packages/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class JavaScriptExecutionMode extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly BeforeRunning: Adobe.Illustrator.JavaScriptExecutionMode;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly never: Adobe.Illustrator.JavaScriptExecutionMode;
			public static readonly OnRuntimeError: Adobe.Illustrator.JavaScriptExecutionMode;
			/** Constructor */
			public constructor();
		}
	}
}