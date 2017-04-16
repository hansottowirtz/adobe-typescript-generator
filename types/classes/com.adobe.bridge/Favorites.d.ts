/// <reference path="../../packages/com.adobe.bridge/references.d.ts"/>

declare namespace Adobe {
	namespace Bridge {
		/**
		 * The Favorites object is itself an array of Thumbnail 
		 * objects. Use Favorites.length to get the size of the array. 
		 * While the Folders pane shows the full navigation hierarchy, 
		 * with all folders and subfolders that Adobe Bridge can 
		 * access, the Favorites pane shows only certain top-level 
		 * folders and one level of subfolders. Subfolders in the 
		 * Favorites pane can be, but are not necessarily, children of 
		 * the Thumbnail for the parent node.Access the Favorites 
		 * object through app.favorites.
		 */
		class Favorites extends Adobe.Csawlib.CSHostObject {
			/**
			 * Sets the section of the Favorites pane for the next node 
			 * operations in the immediate scope.
			 * @type {string}
			 */
			public section: string;
		}
	}
}