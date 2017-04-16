/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class SourceSpaces extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Uses the color space of the proof.
			 * @type {Adobe.Incopy.SourceSpaces}
			 * @readonly
			 */
			public static readonly PROOF_SPACE: Adobe.Incopy.SourceSpaces;
			/**
			 * Alias for PROOF_SPACE. Uses the color space of the proof.
			 * @type {Adobe.Incopy.SourceSpaces}
			 * @readonly
			 */
			public static readonly proofSpace: Adobe.Incopy.SourceSpaces;
			/**
			 * Uses the color space of the document.
			 * @type {Adobe.Incopy.SourceSpaces}
			 * @readonly
			 */
			public static readonly USE_DOCUMENT: Adobe.Incopy.SourceSpaces;
			/**
			 * Alias for USE_DOCUMENT. Uses the color space of the 
			 * document.
			 * @type {Adobe.Incopy.SourceSpaces}
			 * @readonly
			 */
			public static readonly useDocument: Adobe.Incopy.SourceSpaces;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}