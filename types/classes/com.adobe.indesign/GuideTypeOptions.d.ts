/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class GuideTypeOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for LIQUID. Liquid guide.
			 * @type {Adobe.Indesign.GuideTypeOptions}
			 * @readonly
			 */
			public static readonly liquid: Adobe.Indesign.GuideTypeOptions;
			/**
			 * Liquid guide.
			 * @type {Adobe.Indesign.GuideTypeOptions}
			 * @readonly
			 */
			public static readonly LIQUID: Adobe.Indesign.GuideTypeOptions;
			/**
			 * Alias for RULER. Ruler guide (default).
			 * @type {Adobe.Indesign.GuideTypeOptions}
			 * @readonly
			 */
			public static readonly ruler: Adobe.Indesign.GuideTypeOptions;
			/**
			 * Ruler guide (default).
			 * @type {Adobe.Indesign.GuideTypeOptions}
			 * @readonly
			 */
			public static readonly RULER: Adobe.Indesign.GuideTypeOptions;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}