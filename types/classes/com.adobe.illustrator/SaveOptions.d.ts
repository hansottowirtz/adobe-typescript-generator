/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class SaveOptions extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/**
			 * @type {Adobe.Illustrator.SaveOptions}
			 * @readonly
			 */
			public static readonly DONOTSAVECHANGES: Adobe.Illustrator.SaveOptions;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Illustrator.SaveOptions}
			 * @readonly
			 */
			public static readonly PROMPTTOSAVECHANGES: Adobe.Illustrator.SaveOptions;
			/**
			 * @type {Adobe.Illustrator.SaveOptions}
			 * @readonly
			 */
			public static readonly SAVECHANGES: Adobe.Illustrator.SaveOptions;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}