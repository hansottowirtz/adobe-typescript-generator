/// <reference path="../../packages/com.adobe.csawlib/references.d.ts"/>

declare namespace Adobe {
	namespace Csawlib {
		class TypeConUtils {
			/**
			 * Encapsulate calls to getDefinitionByName with optional 
			 * iteration over possible namespaces that might have the class 
			 * we're looking for- throw a runtime error if we don't find a 
			 * class definition, so that we can entirely replace calls to 
			 * getDefinitionByName with this function.
			 * @param {string} className
			 * @returns {any}
			 */
			public getAnyPossibleClassDefinitionFor(className: string): any;
			/**
			 * @param {string} className
			 * @param {boolean} wantPackageName
			 * @returns {string}
			 */
			public getNameFromQualified(className: string, wantPackageName: boolean): string;
			/**
			 * @param {string} className
			 * @returns {string}
			 */
			public getPackageNameFromQualified(className: string): string;
			/**
			 * @param {string} qName
			 * @returns {string}
			 */
			public getSafeClassname(qName: string): string;
			/**
			 * @param {any} clz
			 * @returns {string}
			 */
			public getShortClassNameFromClass(clz: any): string;
			/**
			 * @param {string} className
			 * @returns {string}
			 */
			public getShortClassNameFromQualified(className: string): string;
			/**
			 * @param {string} str
			 * @returns {void}
			 */
			public registerNamespace(str: string): void;
			/**
			 * @param {any} obj
			 * @returns {any}
			 */
			public translateForForwardCall(obj: any): any;
		}
	}
}