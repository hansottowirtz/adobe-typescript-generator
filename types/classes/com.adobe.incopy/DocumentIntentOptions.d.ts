/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class DocumentIntentOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Intended purpose of document is for digital publishing.
			 * @type {Adobe.Incopy.DocumentIntentOptions}
			 * @readonly
			 */
			public static readonly DPS_INTENT: Adobe.Incopy.DocumentIntentOptions;
			/**
			 * Alias for DPS_INTENT. Intended purpose of document is for 
			 * digital publishing.
			 * @type {Adobe.Incopy.DocumentIntentOptions}
			 * @readonly
			 */
			public static readonly dpsIntent: Adobe.Incopy.DocumentIntentOptions;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Intended purpose of document is for print output.
			 * @type {Adobe.Incopy.DocumentIntentOptions}
			 * @readonly
			 */
			public static readonly PRINT_INTENT: Adobe.Incopy.DocumentIntentOptions;
			/**
			 * Alias for PRINT_INTENT. Intended purpose of document is for 
			 * print output.
			 * @type {Adobe.Incopy.DocumentIntentOptions}
			 * @readonly
			 */
			public static readonly printIntent: Adobe.Incopy.DocumentIntentOptions;
			/**
			 * Intended purpose of document is for web output.
			 * @type {Adobe.Incopy.DocumentIntentOptions}
			 * @readonly
			 */
			public static readonly WEB_INTENT: Adobe.Incopy.DocumentIntentOptions;
			/**
			 * Alias for WEB_INTENT. Intended purpose of document is for 
			 * web output.
			 * @type {Adobe.Incopy.DocumentIntentOptions}
			 * @readonly
			 */
			public static readonly webIntent: Adobe.Incopy.DocumentIntentOptions;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}