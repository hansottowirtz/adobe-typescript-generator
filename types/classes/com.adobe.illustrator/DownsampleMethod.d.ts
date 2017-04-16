/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class DownsampleMethod extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/**
			 * @type {Adobe.Illustrator.DownsampleMethod}
			 * @readonly
			 */
			public static readonly AVERAGEDOWNSAMPLE: Adobe.Illustrator.DownsampleMethod;
			/**
			 * @type {Adobe.Illustrator.DownsampleMethod}
			 * @readonly
			 */
			public static readonly BICUBICDOWNSAMPLE: Adobe.Illustrator.DownsampleMethod;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Illustrator.DownsampleMethod}
			 * @readonly
			 */
			public static readonly NODOWNSAMPLE: Adobe.Illustrator.DownsampleMethod;
			/**
			 * @type {Adobe.Illustrator.DownsampleMethod}
			 * @readonly
			 */
			public static readonly SUBSAMPLE: Adobe.Illustrator.DownsampleMethod;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}