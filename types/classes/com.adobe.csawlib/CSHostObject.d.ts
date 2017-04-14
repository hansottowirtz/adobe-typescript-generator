/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.csawlib/index.d.ts"/>
declare namespace Adobe {
	namespace Csawlib {
		class CSHostObject {
			/** Getter for the delegate */
			public hostObjectDelegate: HostObject;
			/** Constructor */
			public constructor(delegateHostObject: HostObject);
			public callProperty(methodName: any, ...args: any[]): any;
			protected createWithArgs(args: any[]): void;
			/**
			 * Function to clean up the argument list and put it into a 
			 * format that makes sense for HBAPI. Note that this occurs 
			 * after replaceDefaultArgs and is just before we do, say, a 
			 * __call to the host.
			 */
			public filterArgsForHBAPI(args: any[]): any[];
			public filterSingleObjectForHBAPI(value: any): any;
			/**
			 * This returns a "Class" object, meaning, a HostObject that 
			 * can be used to make static function calls or get static 
			 * properties
			 */
			public getClassObjectForName(className: string): HostObject;
			public getProperty(name: any): any;
			public getSpecialTranslation(className: string, ho: HostObject, expectedReturnType: any, ownerName: string): any;
			/** Encapsulates a function call to the host */
			public hostCall(name: string, expectedReturnType: any, rawargs: any[]): any;
			/** Implements a safe call of a static method on the host */
			public hostCallStatic(className: string, methodName: string, expectedReturnType: any, rawargs: any[]): any;
			protected hostCreate(args: any[]): void;
			/** Encapsulates a property get to the host */
			public hostGet(name: string, expectedReturnType: any): any;
			/** Encapsulates a indexed get to the host */
			public hostGetIndex(idx: any, expectedReturnType: any): any;
			/**
			 * Implements a safe get of a static property on the host Used 
			 * by for instance, all the enum implementations. Marked public 
			 * to be easily testable.
			 */
			public hostGetStatic(className: string, propertyName: string, expectedReturnType: any): any;
			/** Encapsulates a property set to the host */
			public hostSet(name: string, rawvalue: any): void;
			/** Implements a safe set of a static property on the host */
			public hostSetStatic(className: string, propertyName: string, rawvalue: any): any;
			/**
			 * Efficiently determines whether or not one class descends 
			 * from another in inheritance hierarchy- class relationships 
			 * are cached by the ClassUtils implementation- (uses 
			 * org.as3commons lib to quickly discover class hierarchy.
			 */
			public isDescendedFrom(clz: any, ancClass: any): boolean;
			/**
			 * Function to tidy up arguments prior to call. Marked public 
			 * to be more easily testable. TODO: this could be static, it 
			 * doesn't need to be an instance func
			 */
			public replaceDefaultArgs(args: any[], defaultArgs: any[]): any[];
			public setProperty(name: any, value: any): void;
			/** Method used on static/normal get/ hostcalls */
			public wrapReturnedHostObject(rawObject: any, expectedReturnType: any, client: CSHostObject, propertyName: string): any;
		}
	}
}