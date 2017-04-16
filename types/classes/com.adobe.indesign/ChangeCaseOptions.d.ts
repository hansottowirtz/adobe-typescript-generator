/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ChangeCaseOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for LOWERCASE. Converts all letters to lowercase.
			 * @type {Adobe.Indesign.ChangeCaseOptions}
			 * @readonly
			 */
			public static readonly lowercase: Adobe.Indesign.ChangeCaseOptions;
			/**
			 * Converts all letters to lowercase.
			 * @type {Adobe.Indesign.ChangeCaseOptions}
			 * @readonly
			 */
			public static readonly LOWERCASE: Adobe.Indesign.ChangeCaseOptions;
			/**
			 * Alias for NONE. No conversion.
			 * @type {Adobe.Indesign.ChangeCaseOptions}
			 * @readonly
			 */
			public static readonly none: Adobe.Indesign.ChangeCaseOptions;
			/**
			 * No conversion.
			 * @type {Adobe.Indesign.ChangeCaseOptions}
			 * @readonly
			 */
			public static readonly NONE: Adobe.Indesign.ChangeCaseOptions;
			/**
			 * Alias for SENTENCECASE. Converts the first letter of the 
			 * first word of each sentence to uppercase.
			 * @type {Adobe.Indesign.ChangeCaseOptions}
			 * @readonly
			 */
			public static readonly sentencecase: Adobe.Indesign.ChangeCaseOptions;
			/**
			 * Converts the first letter of the first word of each sentence 
			 * to uppercase.
			 * @type {Adobe.Indesign.ChangeCaseOptions}
			 * @readonly
			 */
			public static readonly SENTENCECASE: Adobe.Indesign.ChangeCaseOptions;
			/**
			 * Alias for TITLECASE. Converts the first letter of each word 
			 * to uppercase.
			 * @type {Adobe.Indesign.ChangeCaseOptions}
			 * @readonly
			 */
			public static readonly titlecase: Adobe.Indesign.ChangeCaseOptions;
			/**
			 * Converts the first letter of each word to uppercase.
			 * @type {Adobe.Indesign.ChangeCaseOptions}
			 * @readonly
			 */
			public static readonly TITLECASE: Adobe.Indesign.ChangeCaseOptions;
			/**
			 * Alias for UPPERCASE. Converts all letters to uppercase.
			 * @type {Adobe.Indesign.ChangeCaseOptions}
			 * @readonly
			 */
			public static readonly uppercase: Adobe.Indesign.ChangeCaseOptions;
			/**
			 * Converts all letters to uppercase.
			 * @type {Adobe.Indesign.ChangeCaseOptions}
			 * @readonly
			 */
			public static readonly UPPERCASE: Adobe.Indesign.ChangeCaseOptions;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}