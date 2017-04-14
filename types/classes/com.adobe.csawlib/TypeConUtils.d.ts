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
			 */
			public getAnyPossibleClassDefinitionFor(className: string): any;
			public getNameFromQualified(className: string, wantPackageName: boolean): string;
			public getPackageNameFromQualified(className: string): string;
			public getSafeClassname(qName: string): string;
			public getShortClassNameFromClass(clz: any): string;
			public getShortClassNameFromQualified(className: string): string;
			public registerNamespace(str: string): void;
			public translateForForwardCall(obj: any): any;
		}
	}
}