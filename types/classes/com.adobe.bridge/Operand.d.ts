/// <reference path="../../packages/com.adobe.bridge/index.d.ts"/>

declare namespace Adobe {
	namespace Bridge {
		/**
		 * An array of these objects is kept in 
		 * SearchCriteria.operands. They are used to populate the 
		 * right-side field in the line that corresponds to the 
		 * criterion in the Find dialog (values to be compared 
		 * against). If there is more than one, the field displays a 
		 * drop-down list.
		 */
		class Operand extends Adobe.Csawlib.CSHostObject {
			/**
			 * The localized display name for the corresponding field in 
			 * the Find dialog.
			 */
			public displayName: string;
			/** The operand value. */
			public valueName: string;
			public constructor();
			/**
			 * @param {any[]} args
			 */
			protected createWithArgs(args: any[]): void;
		}
	}
}