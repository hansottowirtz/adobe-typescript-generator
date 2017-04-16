/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class SaveOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for ASK. Displays a prompts asking whether to save 
			 * changes.
			 * @type {Adobe.Indesign.SaveOptions}
			 * @readonly
			 */
			public static readonly ask: Adobe.Indesign.SaveOptions;
			/**
			 * Displays a prompts asking whether to save changes.
			 * @type {Adobe.Indesign.SaveOptions}
			 * @readonly
			 */
			public static readonly ASK: Adobe.Indesign.SaveOptions;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for NO. Does not save changes.
			 * @type {Adobe.Indesign.SaveOptions}
			 * @readonly
			 */
			public static readonly no: Adobe.Indesign.SaveOptions;
			/**
			 * Does not save changes.
			 * @type {Adobe.Indesign.SaveOptions}
			 * @readonly
			 */
			public static readonly NO: Adobe.Indesign.SaveOptions;
			/**
			 * Alias for YES. Saves changes.
			 * @type {Adobe.Indesign.SaveOptions}
			 * @readonly
			 */
			public static readonly yes: Adobe.Indesign.SaveOptions;
			/**
			 * Saves changes.
			 * @type {Adobe.Indesign.SaveOptions}
			 * @readonly
			 */
			public static readonly YES: Adobe.Indesign.SaveOptions;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}