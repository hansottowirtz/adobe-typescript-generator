/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** Dynamic object used to create data-driven graphics. */
		class Variable extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * the variable's type
			 * @type {Adobe.Illustrator.VariableKind}
			 */
			public kind: Adobe.Illustrator.VariableKind;
			/**
			 * the name of this variable
			 * @type {string}
			 */
			public name: string;
			/**
			 * All the artwork in this document
			 * @type {Adobe.Illustrator.PageItems}
			 * @readonly
			 */
			public readonly pageItems: Adobe.Illustrator.PageItems;
			/**
			 * delete the object
			 * @returns {void}
			 */
			public remove(): void;
		}
	}
}