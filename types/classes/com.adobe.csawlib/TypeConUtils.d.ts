/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.csawlib/index.d.ts"/>

declare namespace Adobe {
	namespace Csawlib {
		class TypeConUtils {
			/**
			 * Encapsulate calls to getDefinitionByName with optional 
			 * iteration over possible namespaces that might have the class 
			 * we're looking for- throw a runtime error if we don't find a 
			 * class definition, so that we can entirely replace calls to 
			 * getDefinitionByName with this function.
			 * @param {string} className - 
			 */
			public getAnyPossibleClassDefinitionFor(className: string): any;
			/**
			 * @param {string} className - 
			 * @param {boolean} wantPackageName - 
			 */
			public getNameFromQualified(className: string, wantPackageName: boolean): string;
			/**
			 * @param {string} className - 
			 */
			public getPackageNameFromQualified(className: string): string;
			/**
			 * @param {string} qName - 
			 */
			public getSafeClassname(qName: string): string;
			/**
			 * @param {any} clz - 
			 */
			public getShortClassNameFromClass(clz: any): string;
			/**
			 * @param {string} className - 
			 */
			public getShortClassNameFromQualified(className: string): string;
			/**
			 * @param {string} str - 
			 */
			public registerNamespace(str: string): void;
			/**
			 * @param {any} obj - 
			 */
			public translateForForwardCall(obj: any): any;
		}
	}
}