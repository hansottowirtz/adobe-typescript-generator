/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class SaveOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for ASK. Displays a prompts asking whether to save 
			 * changes.
			 * @type {Adobe.Incopy.SaveOptions}
			 * @readonly
			 */
			public static readonly ask: Adobe.Incopy.SaveOptions;
			/**
			 * Displays a prompts asking whether to save changes.
			 * @type {Adobe.Incopy.SaveOptions}
			 * @readonly
			 */
			public static readonly ASK: Adobe.Incopy.SaveOptions;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for NO. Does not save changes.
			 * @type {Adobe.Incopy.SaveOptions}
			 * @readonly
			 */
			public static readonly no: Adobe.Incopy.SaveOptions;
			/**
			 * Does not save changes.
			 * @type {Adobe.Incopy.SaveOptions}
			 * @readonly
			 */
			public static readonly NO: Adobe.Incopy.SaveOptions;
			/**
			 * Alias for YES. Saves changes.
			 * @type {Adobe.Incopy.SaveOptions}
			 * @readonly
			 */
			public static readonly yes: Adobe.Incopy.SaveOptions;
			/**
			 * Saves changes.
			 * @type {Adobe.Incopy.SaveOptions}
			 * @readonly
			 */
			public static readonly YES: Adobe.Incopy.SaveOptions;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}