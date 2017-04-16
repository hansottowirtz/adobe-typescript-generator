/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class SourceSpaces extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Uses the color space of the proof.
			 * @type {Adobe.Indesign.SourceSpaces}
			 * @readonly
			 */
			public static readonly PROOF_SPACE: Adobe.Indesign.SourceSpaces;
			/**
			 * Alias for PROOF_SPACE. Uses the color space of the proof.
			 * @type {Adobe.Indesign.SourceSpaces}
			 * @readonly
			 */
			public static readonly proofSpace: Adobe.Indesign.SourceSpaces;
			/**
			 * Uses the color space of the document.
			 * @type {Adobe.Indesign.SourceSpaces}
			 * @readonly
			 */
			public static readonly USE_DOCUMENT: Adobe.Indesign.SourceSpaces;
			/**
			 * Alias for USE_DOCUMENT. Uses the color space of the 
			 * document.
			 * @type {Adobe.Indesign.SourceSpaces}
			 * @readonly
			 */
			public static readonly useDocument: Adobe.Indesign.SourceSpaces;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}