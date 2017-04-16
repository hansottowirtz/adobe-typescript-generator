/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ProofingType extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for CUSTOM. Allows creation of a custom proofing setup 
			 * for a specific output condition.
			 * @type {Adobe.Indesign.ProofingType}
			 * @readonly
			 */
			public static readonly custom: Adobe.Indesign.ProofingType;
			/**
			 * Allows creation of a custom proofing setup for a specific 
			 * output condition.
			 * @type {Adobe.Indesign.ProofingType}
			 * @readonly
			 */
			public static readonly CUSTOM: Adobe.Indesign.ProofingType;
			/**
			 * Creates a soft proof of colors using the document's CMYK 
			 * profile.
			 * @type {Adobe.Indesign.ProofingType}
			 * @readonly
			 */
			public static readonly DOCUMENT_CMYK: Adobe.Indesign.ProofingType;
			/**
			 * Alias for DOCUMENT_CMYK. Creates a soft proof of colors 
			 * using the document's CMYK profile.
			 * @type {Adobe.Indesign.ProofingType}
			 * @readonly
			 */
			public static readonly documentCmyk: Adobe.Indesign.ProofingType;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Turns off soft proof display.
			 * @type {Adobe.Indesign.ProofingType}
			 * @readonly
			 */
			public static readonly PROOF_OFF: Adobe.Indesign.ProofingType;
			/**
			 * Alias for PROOF_OFF. Turns off soft proof display.
			 * @type {Adobe.Indesign.ProofingType}
			 * @readonly
			 */
			public static readonly proofOff: Adobe.Indesign.ProofingType;
			/**
			 * Creates a soft proof of colors using the current CMYK 
			 * working space.
			 * @type {Adobe.Indesign.ProofingType}
			 * @readonly
			 */
			public static readonly WORKING_CMYK: Adobe.Indesign.ProofingType;
			/**
			 * Alias for WORKING_CMYK. Creates a soft proof of colors using 
			 * the current CMYK working space.
			 * @type {Adobe.Indesign.ProofingType}
			 * @readonly
			 */
			public static readonly workingCmyk: Adobe.Indesign.ProofingType;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}