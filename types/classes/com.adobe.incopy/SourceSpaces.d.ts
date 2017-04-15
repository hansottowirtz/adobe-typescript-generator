/// <reference path="../../namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class SourceSpaces extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Uses the color space of the proof. */
			public static readonly PROOF_SPACE: Adobe.Incopy.SourceSpaces;
			/** Alias for PROOF_SPACE. Uses the color space of the proof. */
			public static readonly proofSpace: Adobe.Incopy.SourceSpaces;
			/** Uses the color space of the document. */
			public static readonly USE_DOCUMENT: Adobe.Incopy.SourceSpaces;
			/**
			 * Alias for USE_DOCUMENT. Uses the color space of the 
			 * document.
			 */
			public static readonly useDocument: Adobe.Incopy.SourceSpaces;
			/** Constructor */
			public constructor();
		}
	}
}