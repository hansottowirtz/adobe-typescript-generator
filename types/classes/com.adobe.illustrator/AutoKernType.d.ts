/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class AutoKernType extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/**
			 * @type {Adobe.Illustrator.AutoKernType}
			 * @readonly
			 */
			public static readonly AUTO: Adobe.Illustrator.AutoKernType;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Illustrator.AutoKernType}
			 * @readonly
			 */
			public static readonly METRICSROMANONLY: Adobe.Illustrator.AutoKernType;
			/**
			 * @type {Adobe.Illustrator.AutoKernType}
			 * @readonly
			 */
			public static readonly NOAUTOKERN: Adobe.Illustrator.AutoKernType;
			/**
			 * @type {Adobe.Illustrator.AutoKernType}
			 * @readonly
			 */
			public static readonly OPTICAL: Adobe.Illustrator.AutoKernType;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}