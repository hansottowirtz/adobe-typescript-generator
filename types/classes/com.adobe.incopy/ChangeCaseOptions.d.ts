/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ChangeCaseOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for LOWERCASE. Converts all letters to lowercase.
			 * @type {Adobe.Incopy.ChangeCaseOptions}
			 * @readonly
			 */
			public static readonly lowercase: Adobe.Incopy.ChangeCaseOptions;
			/**
			 * Converts all letters to lowercase.
			 * @type {Adobe.Incopy.ChangeCaseOptions}
			 * @readonly
			 */
			public static readonly LOWERCASE: Adobe.Incopy.ChangeCaseOptions;
			/**
			 * Alias for NONE. No conversion.
			 * @type {Adobe.Incopy.ChangeCaseOptions}
			 * @readonly
			 */
			public static readonly none: Adobe.Incopy.ChangeCaseOptions;
			/**
			 * No conversion.
			 * @type {Adobe.Incopy.ChangeCaseOptions}
			 * @readonly
			 */
			public static readonly NONE: Adobe.Incopy.ChangeCaseOptions;
			/**
			 * Alias for SENTENCECASE. Converts the first letter of the 
			 * first word of each sentence to uppercase.
			 * @type {Adobe.Incopy.ChangeCaseOptions}
			 * @readonly
			 */
			public static readonly sentencecase: Adobe.Incopy.ChangeCaseOptions;
			/**
			 * Converts the first letter of the first word of each sentence 
			 * to uppercase.
			 * @type {Adobe.Incopy.ChangeCaseOptions}
			 * @readonly
			 */
			public static readonly SENTENCECASE: Adobe.Incopy.ChangeCaseOptions;
			/**
			 * Alias for TITLECASE. Converts the first letter of each word 
			 * to uppercase.
			 * @type {Adobe.Incopy.ChangeCaseOptions}
			 * @readonly
			 */
			public static readonly titlecase: Adobe.Incopy.ChangeCaseOptions;
			/**
			 * Converts the first letter of each word to uppercase.
			 * @type {Adobe.Incopy.ChangeCaseOptions}
			 * @readonly
			 */
			public static readonly TITLECASE: Adobe.Incopy.ChangeCaseOptions;
			/**
			 * Alias for UPPERCASE. Converts all letters to uppercase.
			 * @type {Adobe.Incopy.ChangeCaseOptions}
			 * @readonly
			 */
			public static readonly uppercase: Adobe.Incopy.ChangeCaseOptions;
			/**
			 * Converts all letters to uppercase.
			 * @type {Adobe.Incopy.ChangeCaseOptions}
			 * @readonly
			 */
			public static readonly UPPERCASE: Adobe.Incopy.ChangeCaseOptions;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}