/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class TracingColorType extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Illustrator.TracingColorType}
			 * @readonly
			 */
			public static readonly TRACINGFULLCOLOR: Adobe.Illustrator.TracingColorType;
			/**
			 * @type {Adobe.Illustrator.TracingColorType}
			 * @readonly
			 */
			public static readonly TRACINGLIMITEDCOLOR: Adobe.Illustrator.TracingColorType;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}