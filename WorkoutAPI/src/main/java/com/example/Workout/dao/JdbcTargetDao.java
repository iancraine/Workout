package com.example.Workout.dao;

import com.example.Workout.model.Exercise;
import com.example.Workout.model.Target;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
@Component
public class JdbcTargetDao implements TargetDao {
    private JdbcTemplate jdbcTemplate;

    public JdbcTargetDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<Target> getAllTargets() {
        List<Target> results = new ArrayList<>();

        String sql = "SELECT target_id, target_name\n" +
                "FROM target;";
        SqlRowSet rowSet = jdbcTemplate.queryForRowSet(sql);

        while (rowSet.next()){
            Target target = mapRowToTarget(rowSet);
            results.add(target);
        }
        return results;
    }

    @Override
    public Target getTargetById(int targetId) {
        Target target = null;
        String sql = "SELECT target_id, target_name\n" +
                "FROM target\n" +
                "WHERE target_id = ?;";


        SqlRowSet row = jdbcTemplate.queryForRowSet(sql, targetId);
        while (row.next()){
            target = mapRowToTarget(row);
        }
        return target;
    }

    @Override
    public Target addNewTarget(Target newTarget) {
        Target addedTarget;
        String sql = "INSERT INTO target(target_name) " +
                "VALUES (?) RETURNING target_id;\n";
        int newTargetId = jdbcTemplate.queryForObject(sql, Integer.class,
                newTarget.getTargetName());

        addedTarget = getTargetById(newTargetId);

        return addedTarget;
    }

    @Override
    public Target modifyTarget(Target modifiedTarget, int targetId) {
        Target changedTarget;
        String sql = "UPDATE target SET target_name = ?" +
                "WHERE target_id =?";
        jdbcTemplate.update(sql, modifiedTarget.getTargetName(), modifiedTarget.getTargetId());

        changedTarget = getTargetById(targetId);
        return changedTarget;
    }

    @Override
    public void deleteTarget(int targetId) {
        String sql = "DELETE FROM target_exercise WHERE target_id = ?;";
        jdbcTemplate.update(sql, targetId);
        sql = "DELETE FROM target WHERE target_id = ?;";
        jdbcTemplate.update(sql, targetId);
    }

    private Target mapRowToTarget(SqlRowSet rowSet) {
        Target result = new Target();

        result.setTargetId(rowSet.getInt("target_id"));
        result.setTargetName(rowSet.getString("target_name"));

        return result;
    }
}
