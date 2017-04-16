/// <reference path="../../packages/com.adobe.csawlib/references.d.ts"/>

declare namespace Adobe {
	namespace Csawlib {
		/**
		 * Base for all our wrapper classes, which encapsulates host 
		 * object and all interaction with the host through the HBAPI.
		 */
		class CSHostObject extends Adobe.Flash.Utils.Proxy {
			/**
			 * Getter for the delegate
			 * @type {Adobe.Flex.HostObject}
			 */
			public hostObjectDelegate: Adobe.Flex.HostObject;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
			/**
			 * @param {any} methodName
			 * @param {...any} args
			 * @returns {any}
			 */
			public callProperty(methodName: any, ...args: any[]): any;
			/**
			 * @param {any[]} args
			 * @returns {void}
			 */
			protected createWithArgs(args: any[]): void;
			/**
			 * Function to clean up the argument list and put it into a 
			 * format that makes sense for HBAPI. Note that this occurs 
			 * after replaceDefaultArgs and is just before we do, say, a 
			 * __call to the host.
			 * @param {any[]} args
			 * @returns {any[]}
			 */
			public filterArgsForHBAPI(args: any[]): any[];
			/**
			 * @param {any} value
			 * @returns {any}
			 */
			public filterSingleObjectForHBAPI(value: any): any;
			/**
			 * This returns a "Class" object, meaning, a HostObject that 
			 * can be used to make static function calls or get static 
			 * properties
			 * @param {string} className
			 * @returns {Adobe.Flex.HostObject}
			 */
			public getClassObjectForName(className: string): Adobe.Flex.HostObject;
			/**
			 * @param {any} name
			 * @returns {any}
			 */
			public getProperty(name: any): any;
			/**
			 * @param {string} className
			 * @param {Adobe.Flex.HostObject} ho
			 * @param {any} expectedReturnType
			 * @param {string} ownerName
			 * @returns {any}
			 */
			public getSpecialTranslation(className: string, ho: Adobe.Flex.HostObject, expectedReturnType: any, ownerName: string): any;
			/**
			 * Encapsulates a function call to the host
			 * @param {string} name
			 * @param {any} expectedReturnType
			 * @param {any[]} rawargs
			 * @returns {any}
			 */
			public hostCall(name: string, expectedReturnType: any, rawargs: any[]): any;
			/**
			 * Implements a safe call of a static method on the host
			 * @param {string} className
			 * @param {string} methodName
			 * @param {any} expectedReturnType
			 * @param {any[]} rawargs
			 * @returns {any}
			 */
			public hostCallStatic(className: string, methodName: string, expectedReturnType: any, rawargs: any[]): any;
			/**
			 * @param {any[]} args
			 * @returns {void}
			 */
			protected hostCreate(args: any[]): void;
			/**
			 * Encapsulates a property get to the host
			 * @param {string} name
			 * @param {any} expectedReturnType
			 * @returns {any}
			 */
			public hostGet(name: string, expectedReturnType: any): any;
			/**
			 * Encapsulates a indexed get to the host
			 * @param {any} idx
			 * @param {any} expectedReturnType
			 * @returns {any}
			 */
			public hostGetIndex(idx: any, expectedReturnType: any): any;
			/**
			 * Implements a safe get of a static property on the host Used 
			 * by for instance, all the enum implementations. Marked public 
			 * to be easily testable.
			 * @param {string} className
			 * @param {string} propertyName
			 * @param {any} expectedReturnType
			 * @returns {any}
			 */
			public hostGetStatic(className: string, propertyName: string, expectedReturnType: any): any;
			/**
			 * Encapsulates a property set to the host
			 * @param {string} name
			 * @param {any} rawvalue
			 * @returns {void}
			 */
			public hostSet(name: string, rawvalue: any): void;
			/**
			 * Implements a safe set of a static property on the host
			 * @param {string} className
			 * @param {string} propertyName
			 * @param {any} rawvalue
			 * @returns {any}
			 */
			public hostSetStatic(className: string, propertyName: string, rawvalue: any): any;
			/**
			 * Efficiently determines whether or not one class descends 
			 * from another in inheritance hierarchy- class relationships 
			 * are cached by the ClassUtils implementation- (uses 
			 * org.as3commons lib to quickly discover class hierarchy.
			 * @param {any} clz
			 * @param {any} ancClass
			 * @returns {boolean}
			 */
			public isDescendedFrom(clz: any, ancClass: any): boolean;
			/**
			 * Function to tidy up arguments prior to call. Marked public 
			 * to be more easily testable. TODO: this could be static, it 
			 * doesn't need to be an instance func
			 * @param {any[]} args
			 * @param {any[]} defaultArgs
			 * @returns {any[]}
			 */
			public replaceDefaultArgs(args: any[], defaultArgs: any[]): any[];
			/**
			 * @param {any} name
			 * @param {any} value
			 * @returns {void}
			 */
			public setProperty(name: any, value: any): void;
			/**
			 * Method used on static/normal get/ hostcalls
			 * @param {any} rawObject
			 * @param {any} expectedReturnType
			 * @param {Adobe.Csawlib.CSHostObject} client
			 * @param {string} propertyName
			 * @returns {any}
			 */
			public wrapReturnedHostObject(rawObject: any, expectedReturnType: any, client: Adobe.Csawlib.CSHostObject, propertyName: string): any;
		}
	}
}