/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ChangecaseMode extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Alias for LOWERCASE. Makes all letters lowercase. */
			public static readonly lowercase: Adobe.Indesign.ChangecaseMode;
			/** Makes all letters lowercase. */
			public static readonly LOWERCASE: Adobe.Indesign.ChangecaseMode;
			/**
			 * Alias for SENTENCECASE. Makes the first letter of each 
			 * sentence uppercase.
			 */
			public static readonly sentencecase: Adobe.Indesign.ChangecaseMode;
			/** Makes the first letter of each sentence uppercase. */
			public static readonly SENTENCECASE: Adobe.Indesign.ChangecaseMode;
			/**
			 * Alias for TITLECASE. Makes the first letter of each word 
			 * uppercase.
			 */
			public static readonly titlecase: Adobe.Indesign.ChangecaseMode;
			/** Makes the first letter of each word uppercase. */
			public static readonly TITLECASE: Adobe.Indesign.ChangecaseMode;
			/** Alias for UPPERCASE. Makes all letters uppercase. */
			public static readonly uppercase: Adobe.Indesign.ChangecaseMode;
			/** Makes all letters uppercase. */
			public static readonly UPPERCASE: Adobe.Indesign.ChangecaseMode;
			/** Constructor */
			public constructor();
		}
	}
}