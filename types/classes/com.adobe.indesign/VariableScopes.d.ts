/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class VariableScopes extends Adobe.Csawlib.CSEnumBase {
			/**
			 * The scope is limited to the current document.
			 * @type {Adobe.Indesign.VariableScopes}
			 * @readonly
			 */
			public static readonly DOCUMENT_SCOPE: Adobe.Indesign.VariableScopes;
			/**
			 * Alias for DOCUMENT_SCOPE. The scope is limited to the 
			 * current document.
			 * @type {Adobe.Indesign.VariableScopes}
			 * @readonly
			 */
			public static readonly documentScope: Adobe.Indesign.VariableScopes;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * The scope is limited to the current section.
			 * @type {Adobe.Indesign.VariableScopes}
			 * @readonly
			 */
			public static readonly SECTION_SCOPE: Adobe.Indesign.VariableScopes;
			/**
			 * Alias for SECTION_SCOPE. The scope is limited to the current 
			 * section.
			 * @type {Adobe.Indesign.VariableScopes}
			 * @readonly
			 */
			public static readonly sectionScope: Adobe.Indesign.VariableScopes;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}