/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class SaveOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for ASK. Displays a prompts asking whether to save 
			 * changes.
			 */
			public static readonly ask: Adobe.Incopy.SaveOptions;
			/** Displays a prompts asking whether to save changes. */
			public static readonly ASK: Adobe.Incopy.SaveOptions;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Alias for NO. Does not save changes. */
			public static readonly no: Adobe.Incopy.SaveOptions;
			/** Does not save changes. */
			public static readonly NO: Adobe.Incopy.SaveOptions;
			/** Alias for YES. Saves changes. */
			public static readonly yes: Adobe.Incopy.SaveOptions;
			/** Saves changes. */
			public static readonly YES: Adobe.Incopy.SaveOptions;
			/** Constructor */
			public constructor();
		}
	}
}