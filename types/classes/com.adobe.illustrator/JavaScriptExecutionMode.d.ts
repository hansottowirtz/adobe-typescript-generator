/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** When should a JavaScript debugger be shown. */
		class JavaScriptExecutionMode extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/**
			 * Show the JavaScript debugger at the first line of the 
			 * JavaScript.
			 */
			public static readonly BeforeRunning: Adobe.Illustrator.JavaScriptExecutionMode;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Never show the JavaScript debugger. Treat runtime errors by 
			 * throwing a JavaScript exceptions.
			 */
			public static readonly never: Adobe.Illustrator.JavaScriptExecutionMode;
			/** Show the JavaScript debugger is a runtime error occurs. */
			public static readonly OnRuntimeError: Adobe.Illustrator.JavaScriptExecutionMode;
			/** Constructor */
			public constructor();
		}
	}
}