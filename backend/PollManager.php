<?php

    require_once("Uteis.php");
	require_once("GenericManager.php");
    require_once("ItemManager.php");

	class Poll {
		public $id;	
		public $title;
		public $active;
		public $totalVotes;
        public $items = array();
	}

	class PollManager extends GenericManager {
        
        const POLL_ACTIVE_CODE = 1;

        public static function convertPollJSONToOject($pollJSON) {
         
            //$pollObject = json_decode($_REQUEST['poll']);
            $poll = new Poll();
        
            Uteis::cast($poll, $pollJSON);
        
            $items = array();
            foreach ($poll->items as $key => $val ) {
                $item = new Item();
                Uteis::cast($item, $val);
                array_push($items, $item);
            }
        
            $poll->items = $items;
            
            return $poll;
        }

        /** Retrieve Actived Poll */
        public function retrieveActive() {
        
            $query = "SELECT * FROM `$this->TBL_POLLS` WHERE active='".self::POLL_ACTIVE_CODE."';";
            $result = $this->executeQuery($query);
            
            $p = null;
            
            if ($poll = mysql_fetch_object($result)){
                $p = new Poll();

                $p->id = $poll->idpoll;
                $p->title = $poll->title;
                $p->active = $poll->active;
                $p->totalVotes = $poll->total_votes;

                $itemManager = new ItemManager();
                $p->items = $itemManager->retrieveItemsByPoll($p);
            }
            
            return $p;
        }

        /** Increment amount votes */
        public function incrementAmount(Poll $poll, $increment) {
                $query = "UPDATE `$this->TBL_POLLS` 
                SET  
                `total_votes` = `total_votes` + $increment
                WHERE idpoll = '$poll->id';";
            
                $this->executeQuery($query);
        }
        
        /** Persist a poll */
        public function persist(Poll $poll) {
					
			$query = "INSERT INTO `$this->TBL_POLLS` (
				idpoll,
				title,
				active,
				total_votes) 
			VALUES (
			NULL, 
			'$poll->title', 
			'$poll->active', 
			'$poll->totalVotes');";
            
            $this->executeQuery($query);
            
            $idPollPersistent = mysql_insert_id();
            
            $itemManager = new ItemManager();
            
            foreach($poll->items as $item) {
                
                $item->idpoll = $idPollPersistent;
                
                $itemManager->persist($item);
            }
            
            return $this->retrieveById($idPollPersistent);
		}

        /** Retrieve all polls */
		public function retrieveAll() {
			
            $polls = array();
            
			$query = "SELECT * FROM `$this->TBL_POLLS` ORDER BY 'title' ASC;";

            $result = $this->executeQuery($query);
                
            while ($poll = mysql_fetch_object($result)) {
                
                $p = new Poll();
                $p->id = $poll->idpoll;
                $p->title = $poll->title;
                $p->active = $poll->active;
                $p->totalVotes = $poll->total_votes;
                $itemManager = new ItemManager();
                $p->items = $itemManager->retrieveItemsByPoll($p);
                
                $polls[] = $p;
            }
            
			return $polls; 
		}

        /** Retrieve a poll by id */
		public function retrieveById($id) {
			
            $query = "SELECT * FROM `$this->TBL_POLLS` WHERE `idpoll`='$id';";
            $result = $this->executeQuery($query);
            $poll = mysql_fetch_object($result);

			$p = new Poll();
			$p->id = $poll->idpoll;
			$p->title = $poll->title;
			$p->active = $poll->active;
			$p->totalVotes = $poll->total_votes;
            
            $itemManager = new ItemManager();
            $p->items = $itemManager->retrieveItemsByPoll($p);
            
            return $p;
        }

        /** Update a poll */
        public function update(Poll $poll) {

            /** First we need to update the poll's data. */
            $query = "UPDATE `$this->TBL_POLLS` 
                    SET  
                    title = '$poll->title'
                    WHERE idPoll = '$poll->id';";
            
            $this->executeQuery($query);				

            /** After we need to update each poll's items */
            
            $itemManager = new ItemManager();
            
            foreach($poll->items as $item) {
                
                $itemPersisted = $itemManager->retrieveById($item->id);
                
                if (is_null($itemPersisted)) {
                    
                    $itemManager->persist($item);
                } else {
                    
                    $itemManager->update($item);
                }
            }
        }	
		
		public function deletarProduto(Produto $produto) {
				
			$query = "DELETE FROM `$this->TBL_PRODUTOS` WHERE codigo='$produto->codigo';";
			
			return $this->executeQuery($query);
		}
		
	}

?>
