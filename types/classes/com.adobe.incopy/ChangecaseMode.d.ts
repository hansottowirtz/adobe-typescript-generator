/// <reference path="../../namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ChangecaseMode extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Alias for LOWERCASE. Makes all letters lowercase. */
			public static readonly lowercase: Adobe.Incopy.ChangecaseMode;
			/** Makes all letters lowercase. */
			public static readonly LOWERCASE: Adobe.Incopy.ChangecaseMode;
			/**
			 * Alias for SENTENCECASE. Makes the first letter of each 
			 * sentence uppercase.
			 */
			public static readonly sentencecase: Adobe.Incopy.ChangecaseMode;
			/** Makes the first letter of each sentence uppercase. */
			public static readonly SENTENCECASE: Adobe.Incopy.ChangecaseMode;
			/**
			 * Alias for TITLECASE. Makes the first letter of each word 
			 * uppercase.
			 */
			public static readonly titlecase: Adobe.Incopy.ChangecaseMode;
			/** Makes the first letter of each word uppercase. */
			public static readonly TITLECASE: Adobe.Incopy.ChangecaseMode;
			/** Alias for UPPERCASE. Makes all letters uppercase. */
			public static readonly uppercase: Adobe.Incopy.ChangecaseMode;
			/** Makes all letters uppercase. */
			public static readonly UPPERCASE: Adobe.Incopy.ChangecaseMode;
			/** Constructor */
			public constructor();
		}
	}
}