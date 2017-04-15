/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class SourceSpaces extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Uses the color space of the proof. */
			public static readonly PROOF_SPACE: Adobe.Indesign.SourceSpaces;
			/** Alias for PROOF_SPACE. Uses the color space of the proof. */
			public static readonly proofSpace: Adobe.Indesign.SourceSpaces;
			/** Uses the color space of the document. */
			public static readonly USE_DOCUMENT: Adobe.Indesign.SourceSpaces;
			/**
			 * Alias for USE_DOCUMENT. Uses the color space of the 
			 * document.
			 */
			public static readonly useDocument: Adobe.Indesign.SourceSpaces;
			/** Constructor */
			public constructor();
		}
	}
}