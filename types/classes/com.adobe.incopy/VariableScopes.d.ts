/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class VariableScopes extends Adobe.Csawlib.CSEnumBase {
			/**
			 * The scope is limited to the current document.
			 * @type {Adobe.Incopy.VariableScopes}
			 * @readonly
			 */
			public static readonly DOCUMENT_SCOPE: Adobe.Incopy.VariableScopes;
			/**
			 * Alias for DOCUMENT_SCOPE. The scope is limited to the 
			 * current document.
			 * @type {Adobe.Incopy.VariableScopes}
			 * @readonly
			 */
			public static readonly documentScope: Adobe.Incopy.VariableScopes;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * The scope is limited to the current section.
			 * @type {Adobe.Incopy.VariableScopes}
			 * @readonly
			 */
			public static readonly SECTION_SCOPE: Adobe.Incopy.VariableScopes;
			/**
			 * Alias for SECTION_SCOPE. The scope is limited to the current 
			 * section.
			 * @type {Adobe.Incopy.VariableScopes}
			 * @readonly
			 */
			public static readonly sectionScope: Adobe.Incopy.VariableScopes;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}