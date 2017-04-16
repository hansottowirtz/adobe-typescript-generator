/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PreflightScopeOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Include all documents in the book preflight.
			 * @type {Adobe.Indesign.PreflightScopeOptions}
			 * @readonly
			 */
			public static readonly PREFLIGHT_ALL_DOCUMENTS: Adobe.Indesign.PreflightScopeOptions;
			/**
			 * Include all pages in the preflight.
			 * @type {Adobe.Indesign.PreflightScopeOptions}
			 * @readonly
			 */
			public static readonly PREFLIGHT_ALL_PAGES: Adobe.Indesign.PreflightScopeOptions;
			/**
			 * Include only selected document for book preflight.
			 * @type {Adobe.Indesign.PreflightScopeOptions}
			 * @readonly
			 */
			public static readonly PREFLIGHT_SELECTED_DOCUMENTS: Adobe.Indesign.PreflightScopeOptions;
			/**
			 * Alias for PREFLIGHT_ALL_DOCUMENTS. Include all documents in 
			 * the book preflight.
			 * @type {Adobe.Indesign.PreflightScopeOptions}
			 * @readonly
			 */
			public static readonly preflightAllDocuments: Adobe.Indesign.PreflightScopeOptions;
			/**
			 * Alias for PREFLIGHT_ALL_PAGES. Include all pages in the 
			 * preflight.
			 * @type {Adobe.Indesign.PreflightScopeOptions}
			 * @readonly
			 */
			public static readonly preflightAllPages: Adobe.Indesign.PreflightScopeOptions;
			/**
			 * Alias for PREFLIGHT_SELECTED_DOCUMENTS. Include only 
			 * selected document for book preflight.
			 * @type {Adobe.Indesign.PreflightScopeOptions}
			 * @readonly
			 */
			public static readonly preflightSelectedDocuments: Adobe.Indesign.PreflightScopeOptions;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}