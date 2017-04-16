/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class JavaScriptExecutionMode extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * @type {Adobe.Photoshop.JavaScriptExecutionMode}
			 * @readonly
			 */
			public static readonly BEFORERUNNING: Adobe.Photoshop.JavaScriptExecutionMode;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Photoshop.JavaScriptExecutionMode}
			 * @readonly
			 */
			public static readonly NEVER: Adobe.Photoshop.JavaScriptExecutionMode;
			/**
			 * @type {Adobe.Photoshop.JavaScriptExecutionMode}
			 * @readonly
			 */
			public static readonly ONRUNTIMEERROR: Adobe.Photoshop.JavaScriptExecutionMode;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}