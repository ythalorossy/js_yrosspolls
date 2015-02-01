<?php

    require_once("Uteis.php");
	require_once("GenericManager.php");

    class Item {
        public $id;
        public $title;
        public $amount;
        public $idpoll;
    }

	class ItemManager extends GenericManager {
        
        public static function convertItemJSONToOject($itemJSON) {
         
            $item = new Item();
        
            Uteis::cast($item, $itemJSON);

            return $item;
        }
        
        /** Persist a item */
        public function persist(Item $item) {
            
			$query = 
            "INSERT INTO `$this->TBL_ITEMS` (
				iditems,
                idpoll,
				title,
                amount
            ) VALUES (
                NULL, 
                '$item->idpoll', 
                '$item->title', 
                '$item->amount'
            );";
			
			return $this->executeQuery($query);
		}

        public function retrieveItemsByPoll(Poll $poll) {
            
            $items = array();
			
			$query = "SELECT * FROM `$this->TBL_ITEMS` WHERE idpoll=$poll->id";
			
			$result = $this->executeQuery($query);
			
			while ($item = mysql_fetch_object($result)) {
				
				$it = new Item();
				$it->id = $item->iditems;
				$it->title = $item->title;
				$it->amount = $item->amount;
                $it->idpoll = $poll->id;
				
				$items[] = $it;				
			}
            return $items;
        }
        
		public function update(Item $item) {
			
			$query = "UPDATE `$this->TBL_ITEMS` 
						SET  
						title = '$item->title',
						amount = '$item->amount'
						WHERE iditems = '$item->id';";
            
			return $this->executeQuery($query);			
		}	
		
        public function incrementAmount(Item $item, $increment) {
                $query = "UPDATE `$this->TBL_ITEMS` 
                SET  
                `amount` = `amount` + $increment
                WHERE iditems = '$item->id';";
            
                $this->executeQuery($query);
        }

		public function retrieveById($id) {
			
			$query = "SELECT * FROM `$this->TBL_ITEMS` WHERE iditems='$id';";
			
            $result = $this->executeQuery($query);

            if ($item = mysql_fetch_object($result)){

                $it = new Item();
                $it->id = $item->iditems;
                $it->title = $item->title;
                $it->amount = $item->amount;
                $it->idpoll = $item->idpoll;
                
                return $it;    
            } 

            return null;
		}

        
		public function recuperarTodos() {
			
			$query = "SELECT * FROM `$this->TBL_PRODUTOS` ORDER BY descricao ASC;";
			
			return $this->executeQuery($query);	
		}
		
		
		public function delete(Item $item) {
				
			$query = "DELETE FROM `$this->TBL_ITEMS` WHERE iditems='$item->id';";
			
			return $this->executeQuery($query);
		}
		
	}

?>
