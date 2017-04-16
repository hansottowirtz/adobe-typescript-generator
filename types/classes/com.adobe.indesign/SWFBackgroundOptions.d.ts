/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class SWFBackgroundOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Paper color background.
			 * @type {Adobe.Indesign.SWFBackgroundOptions}
			 * @readonly
			 */
			public static readonly PAPER_COLOR: Adobe.Indesign.SWFBackgroundOptions;
			/**
			 * Alias for PAPER_COLOR. Paper color background.
			 * @type {Adobe.Indesign.SWFBackgroundOptions}
			 * @readonly
			 */
			public static readonly paperColor: Adobe.Indesign.SWFBackgroundOptions;
			/**
			 * Transparent background.
			 * @type {Adobe.Indesign.SWFBackgroundOptions}
			 * @readonly
			 */
			public static readonly TRANSPARENT_SWF_BACKGROUND: Adobe.Indesign.SWFBackgroundOptions;
			/**
			 * Alias for TRANSPARENT_SWF_BACKGROUND. Transparent 
			 * background.
			 * @type {Adobe.Indesign.SWFBackgroundOptions}
			 * @readonly
			 */
			public static readonly transparentSwfBackground: Adobe.Indesign.SWFBackgroundOptions;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}