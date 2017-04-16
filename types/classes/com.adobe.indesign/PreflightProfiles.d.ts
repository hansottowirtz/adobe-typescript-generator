/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PreflightProfiles extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new PreflightProfile.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new PreflightProfile (Optional)
			 * @returns {Adobe.Indesign.PreflightProfile}
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.PreflightProfile;
			/**
			 * Returns any PreflightProfile in the collection.
			 * @returns {Adobe.Indesign.PreflightProfile}
			 */
			public anyItem(): Adobe.Indesign.PreflightProfile;
			/**
			 * Displays the number of elements in the PreflightProfile.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every PreflightProfile in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first PreflightProfile in the collection.
			 * @returns {Adobe.Indesign.PreflightProfile}
			 */
			public firstItem(): Adobe.Indesign.PreflightProfile;
			/**
			 * Returns the PreflightProfile with the specified index or 
			 * name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.PreflightProfile}
			 */
			public item(indexParam: any): Adobe.Indesign.PreflightProfile;
			/**
			 * Returns the PreflightProfile with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.PreflightProfile}
			 */
			public itemByID(idParam: number): Adobe.Indesign.PreflightProfile;
			/**
			 * Returns the PreflightProfile with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.PreflightProfile}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.PreflightProfile;
			/**
			 * Returns the PreflightProfiles within the specified range.
			 * @param {any} fromParam The PreflightProfile, index, or name 
			 * at the beginning of the range. Can accept: PreflightProfile, 
			 * Long Integer or String.
			 * @param {any} toParam The PreflightProfile, index, or name at 
			 * the end of the range. Can accept: PreflightProfile, Long 
			 * Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last PreflightProfile in the collection.
			 * @returns {Adobe.Indesign.PreflightProfile}
			 */
			public lastItem(): Adobe.Indesign.PreflightProfile;
			/**
			 * Returns the middle PreflightProfile in the collection.
			 * @returns {Adobe.Indesign.PreflightProfile}
			 */
			public middleItem(): Adobe.Indesign.PreflightProfile;
			/**
			 * Returns the PreflightProfile whose index follows the 
			 * specified PreflightProfile in the collection.
			 * @param {PreflightProfile} objParam The PreflightProfile 
			 * whose index comes before the desired PreflightProfile. 
			 * @returns {Adobe.Indesign.PreflightProfile}
			 */
			public nextItem(objParam: PreflightProfile): Adobe.Indesign.PreflightProfile;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} idx
			 * @returns {number}
			 */
			public nextNameIndex(idx: number): number;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} index
			 * @returns {any}
			 */
			public nextValue(index: number): any;
			/**
			 * Returns the PreflightProfile with the index previous to the 
			 * specified index.
			 * @param {PreflightProfile} objParam The index of the 
			 * PreflightProfile that follows the desired PreflightProfile.
			 * @returns {Adobe.Indesign.PreflightProfile}
			 */
			public previousItem(objParam: PreflightProfile): Adobe.Indesign.PreflightProfile;
		}
	}
}