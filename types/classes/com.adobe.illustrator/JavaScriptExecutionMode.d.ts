/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class JavaScriptExecutionMode extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/**
			 * @type {Adobe.Illustrator.JavaScriptExecutionMode}
			 * @readonly
			 */
			public static readonly BeforeRunning: Adobe.Illustrator.JavaScriptExecutionMode;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Illustrator.JavaScriptExecutionMode}
			 * @readonly
			 */
			public static readonly never: Adobe.Illustrator.JavaScriptExecutionMode;
			/**
			 * @type {Adobe.Illustrator.JavaScriptExecutionMode}
			 * @readonly
			 */
			public static readonly OnRuntimeError: Adobe.Illustrator.JavaScriptExecutionMode;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}