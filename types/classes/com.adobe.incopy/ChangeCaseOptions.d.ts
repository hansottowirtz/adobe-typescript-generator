/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ChangeCaseOptions extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Alias for LOWERCASE. Converts all letters to lowercase. */
			public static readonly lowercase: Adobe.Incopy.ChangeCaseOptions;
			/** Converts all letters to lowercase. */
			public static readonly LOWERCASE: Adobe.Incopy.ChangeCaseOptions;
			/** Alias for NONE. No conversion. */
			public static readonly none: Adobe.Incopy.ChangeCaseOptions;
			/** No conversion. */
			public static readonly NONE: Adobe.Incopy.ChangeCaseOptions;
			/**
			 * Alias for SENTENCECASE. Converts the first letter of the 
			 * first word of each sentence to uppercase.
			 */
			public static readonly sentencecase: Adobe.Incopy.ChangeCaseOptions;
			/**
			 * Converts the first letter of the first word of each sentence 
			 * to uppercase.
			 */
			public static readonly SENTENCECASE: Adobe.Incopy.ChangeCaseOptions;
			/**
			 * Alias for TITLECASE. Converts the first letter of each word 
			 * to uppercase.
			 */
			public static readonly titlecase: Adobe.Incopy.ChangeCaseOptions;
			/** Converts the first letter of each word to uppercase. */
			public static readonly TITLECASE: Adobe.Incopy.ChangeCaseOptions;
			/** Alias for UPPERCASE. Converts all letters to uppercase. */
			public static readonly uppercase: Adobe.Incopy.ChangeCaseOptions;
			/** Converts all letters to uppercase. */
			public static readonly UPPERCASE: Adobe.Incopy.ChangeCaseOptions;
			/** Constructor */
			public constructor();
		}
	}
}