/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class GuideTypeOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for LIQUID. Liquid guide.
			 * @type {Adobe.Incopy.GuideTypeOptions}
			 * @readonly
			 */
			public static readonly liquid: Adobe.Incopy.GuideTypeOptions;
			/**
			 * Liquid guide.
			 * @type {Adobe.Incopy.GuideTypeOptions}
			 * @readonly
			 */
			public static readonly LIQUID: Adobe.Incopy.GuideTypeOptions;
			/**
			 * Alias for RULER. Ruler guide (default).
			 * @type {Adobe.Incopy.GuideTypeOptions}
			 * @readonly
			 */
			public static readonly ruler: Adobe.Incopy.GuideTypeOptions;
			/**
			 * Ruler guide (default).
			 * @type {Adobe.Incopy.GuideTypeOptions}
			 * @readonly
			 */
			public static readonly RULER: Adobe.Incopy.GuideTypeOptions;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}